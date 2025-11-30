// Enhanced Enemy AI Extension
// Add this to your existing game.js or replace the enemy spawning/AI functions

// Enhanced enemy type definitions with behaviors
const ENHANCED_ENEMY_TYPES = {
    // Melee aggressive - charges at player
    GOBLIN: { type: 'goblin', health: 30, damage: 8, xp: 20, speed: 100, color: '#00ff00', behavior: 'aggressive', size: 24 },
    
    // Tank - slow but tough, blocks paths
    ORC: { type: 'orc', health: 60, damage: 15, xp: 35, speed: 70, color: '#ff6600', behavior: 'tank', size: 28 },
    
    // Fast melee
    SKELETON: { type: 'skeleton', health: 35, damage: 10, xp: 25, speed: 110, color: '#cccccc', behavior: 'aggressive', size: 24 },
    
    // Heavy hitter
    DEMON: { type: 'demon', health: 80, damage: 18, xp: 50, speed: 65, color: '#ff0066', behavior: 'tank', size: 32 },
    
    // Teleporting assassin
    WRAITH: { type: 'wraith', health: 30, damage: 16, xp: 40, speed: 130, color: '#8844ff', behavior: 'teleport', teleportChance: 0.015, size: 24 },
    
    // Ranged kiter - stays at distance
    ARCHER: { type: 'archer', health: 25, damage: 12, xp: 30, speed: 80, color: '#44ff44', ranged: true, behavior: 'kite', preferredDistance: 250, size: 24 },
    
    // Ranged support - summons minions
    NECROMANCER: { type: 'necromancer', health: 40, damage: 14, xp: 45, speed: 60, color: '#44ff88', ranged: true, summon: true, behavior: 'support', preferredDistance: 350, size: 24 },
    
    // Fast flanker
    ASSASSIN: { type: 'assassin', health: 28, damage: 20, xp: 35, speed: 150, color: '#cc00cc', behavior: 'flank', size: 22 },
    
    // Elite tank
    BERSERKER: { type: 'berserker', health: 100, damage: 22, xp: 60, speed: 85, color: '#cc3300', behavior: 'berserker', size: 34 }
};

// Add these methods to the Game class (replace existing updateEnemy and related methods)

function safeNormalize(dx, dy) {
    const len = Math.sqrt(dx * dx + dy * dy);
    if (len > 0) {
        return [dx / len, dy / len];
    }
    return [0, 0];
}

// Main enemy update with behavior system
function updateEnemyEnhanced(game, enemy, dt) {
    // Update status effects
    game.updateStatusEffects(enemy, dt);
    
    // Check if stunned
    const isStunned = enemy.statusEffects.some(e => e.type === 'STUN');
    if (isStunned) return;
    
    // Get speed multiplier from status effects
    const speedMult = game.getStatusEffectMultiplier(enemy, 'speedMultiplier');
    
    // Update cooldowns
    if (enemy.attackCooldown > 0) enemy.attackCooldown -= dt * 1000;
    if (enemy.summonCooldown > 0) enemy.summonCooldown -= dt * 1000;
    if (enemy.teleportCooldown > 0) enemy.teleportCooldown -= dt * 1000;
    if (enemy.dodgeCooldown > 0) enemy.dodgeCooldown -= dt * 1000;
    if (enemy.specialCooldown > 0) enemy.specialCooldown -= dt * 1000;
    
    const dx = game.player.x - enemy.x;
    const dy = game.player.y - enemy.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < Math.max(enemy.width, 18)) {
        const [nx, ny] = safeNormalize(-dx, -dy);
        const sep = enemy.speed * game.getStatusEffectMultiplier(enemy, 'speedMultiplier') * dt * 0.6;
        tryMoveEnhanced(game, enemy, nx * sep, ny * sep);
    }

    if (game.enemies && game.enemies.length > 1) {
        let pushX = 0;
        let pushY = 0;
        for (let i = 0; i < game.enemies.length; i++) {
            const other = game.enemies[i];
            if (other === enemy) continue;
            const ox = enemy.x - other.x;
            const oy = enemy.y - other.y;
            const d = Math.sqrt(ox * ox + oy * oy);
            const minDist = (enemy.width + other.width) * 0.5;
            if (d > 0 && d < minDist) {
                const [nx, ny] = safeNormalize(ox, oy);
                const amt = ((minDist - d) / minDist) * enemy.speed * dt * 0.25;
                pushX += nx * amt;
                pushY += ny * amt;
            }
        }
        if (pushX !== 0 || pushY !== 0) {
            tryMoveEnhanced(game, enemy, pushX, pushY);
        }
    }
    
    // Boss special abilities
    if (enemy.isBoss && enemy.bossType) {
        updateBossAbilityEnhanced(game, enemy, dt, distance);
    }
    
    // Necromancer summon ability
    if (enemy.canSummon && enemy.summonCooldown <= 0 && distance < 400 && Math.random() < 0.008) {
        spawnEnemyEnhanced(game, enemy.x + (Math.random() - 0.5) * 100, enemy.y + (Math.random() - 0.5) * 100, game.currentFloor - 1);
        enemy.summonCooldown = 12000;
        game.addMessage('Necromancer summoned reinforcements!', 'damage');
    }
    
    // Update flank angle for coordinated behavior
    if (Math.random() < 0.03) {
        enemy.flankAngle += (Math.random() - 0.5) * 0.8;
    }
    
    // Behavior-based AI
    if (distance < 450) {
        enemy.aiState = 'chase';
        
        switch(enemy.behavior) {
            case 'aggressive':
                aggressiveAI(game, enemy, dx, dy, distance, speedMult, dt);
                break;
            case 'tank':
                tankAI(game, enemy, dx, dy, distance, speedMult, dt);
                break;
            case 'kite':
                kiteAI(game, enemy, dx, dy, distance, speedMult, dt);
                break;
            case 'teleport':
                teleportAI(game, enemy, dx, dy, distance, speedMult, dt);
                break;
            case 'support':
                supportAI(game, enemy, dx, dy, distance, speedMult, dt);
                break;
            case 'flank':
                flankAI(game, enemy, dx, dy, distance, speedMult, dt);
                break;
            case 'berserker':
                berserkerAI(game, enemy, dx, dy, distance, speedMult, dt);
                break;
            default:
                aggressiveAI(game, enemy, dx, dy, distance, speedMult, dt);
        }
        
        // Store last known player position for prediction
        enemy.lastPlayerX = game.player.x;
        enemy.lastPlayerY = game.player.y;
    } else {
        enemy.aiState = 'idle';
    }
}

// Aggressive AI - charges directly with slight flanking
function aggressiveAI(game, enemy, dx, dy, distance, speedMult, dt) {
    const attackRange = game.constructor.name === 'Game' ? 150 : game.ATTACK_RANGE || 150;
    
    if (distance < attackRange || (distance < 180 && enemy.ranged)) {
        if (enemy.attackCooldown <= 0) {
            enemyAttackEnhanced(game, enemy);
        }
    } else {
        // Add flanking movement
        const angle = Math.atan2(dy, dx) + Math.sin(enemy.flankAngle) * 0.4;
        const moveX = Math.cos(angle) * enemy.speed * speedMult * dt;
        const moveY = Math.sin(angle) * enemy.speed * speedMult * dt;
        tryMoveEnhanced(game, enemy, moveX, moveY);
    }
}

// Tank AI - blocks and holds position
function tankAI(game, enemy, dx, dy, distance, speedMult, dt) {
    const optimalRange = 120;
    const attackRange = 150;
    const denom = distance > 0 ? distance : 1;
    
    if (distance < optimalRange - 30) {
        // Too close, back up slightly
        const moveX = -(dx / denom) * enemy.speed * speedMult * dt * 0.5;
        const moveY = -(dy / denom) * enemy.speed * speedMult * dt * 0.5;
        tryMoveEnhanced(game, enemy, moveX, moveY);
    } else if (distance < attackRange) {
        if (enemy.attackCooldown <= 0) {
            enemyAttackEnhanced(game, enemy);
        }
    } else if (distance > optimalRange + 60) {
        // Move forward to optimal range
        const moveX = (dx / denom) * enemy.speed * speedMult * dt;
        const moveY = (dy / denom) * enemy.speed * speedMult * dt;
        tryMoveEnhanced(game, enemy, moveX, moveY);
    }
}

// Kite AI - maintains distance, strafes, shoots
function kiteAI(game, enemy, dx, dy, distance, speedMult, dt) {
    const minDist = enemy.preferredDistance * 0.7;
    const maxDist = enemy.preferredDistance * 1.4;
    const denom = distance > 0 ? distance : 1;
    
    if (distance < minDist) {
        // Run away
        const moveX = -(dx / denom) * enemy.speed * speedMult * dt * 1.4;
        const moveY = -(dy / denom) * enemy.speed * speedMult * dt * 1.4;
        tryMoveEnhanced(game, enemy, moveX, moveY);
    } else if (distance > maxDist) {
        // Move closer
        const moveX = (dx / denom) * enemy.speed * speedMult * dt * 0.7;
        const moveY = (dy / denom) * enemy.speed * speedMult * dt * 0.7;
        tryMoveEnhanced(game, enemy, moveX, moveY);
    } else {
        // Strafe around player
        const perpX = -dy / denom;
        const perpY = dx / denom;
        const phase = Date.now() * 0.001 + enemy.flankAngle;
        const amp = 0.8;
        const moveX = perpX * enemy.speed * speedMult * dt * Math.sin(phase) * amp;
        const moveY = perpY * enemy.speed * speedMult * dt * Math.sin(phase) * amp;
        tryMoveEnhanced(game, enemy, moveX, moveY);
    }
    
    // Attack from distance
    if (enemy.attackCooldown <= 0 && distance < maxDist) {
        enemyAttackEnhanced(game, enemy);
    }
}

// Teleport AI - blinks around, attacks, blinks away
function teleportAI(game, enemy, dx, dy, distance, speedMult, dt) {
    const attackRange = 150;
    const denom = distance > 0 ? distance : 1;
    
    if (enemy.teleportCooldown <= 0 && (distance < 70 || distance > 320 || Math.random() < enemy.teleportChance)) {
        let newX = enemy.x;
        let newY = enemy.y;
        let found = false;
        for (let i = 0; i < 6; i++) {
            const angle = Math.random() * Math.PI * 2;
            const teleportDist = 140 + Math.random() * 90;
            const candidateX = game.player.x + Math.cos(angle) * teleportDist;
            const candidateY = game.player.y + Math.sin(angle) * teleportDist;
            if (game.canMove(candidateX, candidateY, enemy.width, enemy.height)) {
                newX = candidateX;
                newY = candidateY;
                found = true;
                break;
            }
        }
        
        if (found) {
            // Teleport particles
            for (let i = 0; i < 20; i++) {
                game.particles.push(new Particle(
                    enemy.x + enemy.width / 2,
                    enemy.y + enemy.height / 2,
                    enemy.color,
                    'spark'
                ));
            }
            
            enemy.x = newX;
            enemy.y = newY;
            
            for (let i = 0; i < 20; i++) {
                game.particles.push(new Particle(
                    enemy.x + enemy.width / 2,
                    enemy.y + enemy.height / 2,
                    enemy.color,
                    'spark'
                ));
            }
            
            enemy.teleportCooldown = 5000;
            game.screenShake = 0.3;
        }
    } else {
        // Normal fast movement when not teleporting
        if (distance < attackRange) {
            if (enemy.attackCooldown <= 0) {
                enemyAttackEnhanced(game, enemy);
            }
        } else {
            const moveX = (dx / denom) * enemy.speed * speedMult * dt * 1.5;
            const moveY = (dy / denom) * enemy.speed * speedMult * dt * 1.5;
            tryMoveEnhanced(game, enemy, moveX, moveY);
        }
    }
}

// Support AI - stays back, summons, heals allies
function supportAI(game, enemy, dx, dy, distance, speedMult, dt) {
    const safeDistance = enemy.preferredDistance * 0.65;
    const denom = distance > 0 ? distance : 1;
    
    if (distance < safeDistance) {
        // Retreat to safer distance
        const moveX = -(dx / denom) * enemy.speed * speedMult * dt * 1.1;
        const moveY = -(dy / denom) * enemy.speed * speedMult * dt * 1.1;
        tryMoveEnhanced(game, enemy, moveX, moveY);
    } else if (distance > enemy.preferredDistance * 1.6) {
        // Move slightly closer but stay safe
        const moveX = (dx / denom) * enemy.speed * speedMult * dt * 0.4;
        const moveY = (dy / denom) * enemy.speed * speedMult * dt * 0.4;
        tryMoveEnhanced(game, enemy, moveX, moveY);
    }
    
    // Attack from safe distance
    if (enemy.attackCooldown <= 0 && distance < 450) {
        enemyAttackEnhanced(game, enemy);
    }
}

// Flank AI - circles around player for backstabs
function flankAI(game, enemy, dx, dy, distance, speedMult, dt) {
    const optimalDistance = 180;
    const attackRange = 160;
    const denom = distance > 0 ? distance : 1;
    
    if (distance < 80) {
        // Too close, dash away
        const moveX = -(dx / denom) * enemy.speed * speedMult * dt * 1.8;
        const moveY = -(dy / denom) * enemy.speed * speedMult * dt * 1.8;
        tryMoveEnhanced(game, enemy, moveX, moveY);
    } else if (distance > optimalDistance * 1.3) {
        // Close in
        const moveX = (dx / denom) * enemy.speed * speedMult * dt * 1.3;
        const moveY = (dy / denom) * enemy.speed * speedMult * dt * 1.3;
        tryMoveEnhanced(game, enemy, moveX, moveY);
    } else {
        // Circle around player rapidly
        const angle = Math.atan2(dy, dx) + enemy.flankAngle;
        const circleX = Math.cos(angle) * enemy.speed * speedMult * dt * 0.3;
        const circleY = Math.sin(angle) * enemy.speed * speedMult * dt * 0.3;
        const perpX = -dy / denom * enemy.speed * speedMult * dt * 1.5;
        const perpY = dx / denom * enemy.speed * speedMult * dt * 1.5;
        tryMoveEnhanced(game, enemy, circleX + perpX, circleY + perpY);
    }
    
    // Quick attacks
    if (enemy.attackCooldown <= 0 && distance < attackRange) {
        enemyAttackEnhanced(game, enemy);
        enemy.attackCooldown *= 0.7; // Attack faster
    }
}

// Berserker AI - gets more aggressive as health lowers
function berserkerAI(game, enemy, dx, dy, distance, speedMult, dt) {
    const healthPercent = enemy.health / enemy.maxHealth;
    const rageMultiplier = 1 + (1 - healthPercent) * 0.8; // Up to 1.8x speed when low health
    const attackRange = 150;
    const denom = distance > 0 ? distance : 1;
    
    if (distance < attackRange) {
        if (enemy.attackCooldown <= 0) {
            enemyAttackEnhanced(game, enemy);
            // Faster attacks when enraged
            if (healthPercent < 0.4) {
                enemy.attackCooldown *= 0.6;
            }
        }
    } else {
        // Charge with increasing speed as health lowers
        const moveX = (dx / denom) * enemy.speed * speedMult * dt * rageMultiplier;
        const moveY = (dy / denom) * enemy.speed * speedMult * dt * rageMultiplier;
        tryMoveEnhanced(game, enemy, moveX, moveY);
    }
    
    // Visual rage effect when low health
    if (healthPercent < 0.3 && Math.random() < 0.1) {
        game.particles.push(new Particle(
            enemy.x + enemy.width / 2,
            enemy.y + enemy.height / 2,
            '#ff0000',
            'spark'
        ));
    }
}

// Enhanced enemy attack with prediction
function enemyAttackEnhanced(game, enemy) {
    // Predict player movement
    const playerVelX = (game.player.x - enemy.lastPlayerX) || 0;
    const playerVelY = (game.player.y - enemy.lastPlayerY) || 0;
    const leadAmount = enemy.ranged ? 2.0 : 0.5;
    const targetX = game.player.x + playerVelX * leadAmount;
    const targetY = game.player.y + playerVelY * leadAmount;
    const spread = enemy.ranged ? 18 : 6;
    const offsetX = (Math.random() - 0.5) * spread * 2;
    const offsetY = (Math.random() - 0.5) * spread * 2;
    const aimX = targetX + offsetX;
    const aimY = targetY + offsetY;

    game.createEnemyProjectile(enemy.x, enemy.y, aimX, aimY, enemy.damage, enemy.type);
    const baseCooldown = 1000; // Default enemy attack cooldown
    enemy.attackCooldown = baseCooldown * (enemy.ranged ? 0.75 : 1.0);
}

// Enhanced movement with collision
function tryMoveEnhanced(game, enemy, moveX, moveY) {
    const safeMoveX = Number.isFinite(moveX) ? moveX : 0;
    const safeMoveY = Number.isFinite(moveY) ? moveY : 0;

    const newX = enemy.x + safeMoveX;
    const newY = enemy.y + safeMoveY;

    if (Number.isFinite(newX) && game.canMove(newX, enemy.y, enemy.width, enemy.height)) {
        enemy.x = newX;
    }
    if (Number.isFinite(newY) && game.canMove(enemy.x, newY, enemy.width, enemy.height)) {
        enemy.y = newY;
    }
}

// Enhanced boss abilities
function updateBossAbilityEnhanced(game, enemy, dt, distanceToPlayer) {
    if (!enemy.specialAttackCooldown) enemy.specialAttackCooldown = 0;
    if (!enemy.teleportCooldown) enemy.teleportCooldown = 0;
    
    enemy.specialAttackCooldown -= dt * 1000;
    enemy.teleportCooldown -= dt * 1000;
    
    const ability = enemy.bossType.ability;
    
    switch(ability) {
        case 'summon_minions':
            if (enemy.specialAttackCooldown <= 0) {
                const numMinions = 3 + Math.floor(Math.random() * 2);
                for (let i = 0; i < numMinions; i++) {
                    spawnEnemyEnhanced(game, 
                        enemy.x + (Math.random() - 0.5) * 180,
                        enemy.y + (Math.random() - 0.5) * 180,
                        game.currentFloor - 2
                    );
                }
                game.addMessage(`${enemy.bossType.name} summoned minions!`, 'damage');
                enemy.specialAttackCooldown = 18000;
                game.screenShake = 0.5;
            }
            break;
            
        case 'fire_nova':
            if (enemy.specialAttackCooldown <= 0 && distanceToPlayer < 280) {
                for (let i = 0; i < 12; i++) {
                    const angle = (i / 12) * Math.PI * 2;
                    const targetX = enemy.x + Math.cos(angle) * 400;
                    const targetY = enemy.y + Math.sin(angle) * 400;
                    game.createEnemyProjectile(enemy.x, enemy.y, targetX, targetY, enemy.damage * 0.8, 'Fire Nova');
                }
                game.addMessage(`${enemy.bossType.name} unleashed Fire Nova!`, 'damage');
                enemy.specialAttackCooldown = 10000;
                game.screenShake = 0.7;
            }
            break;
            
        case 'freeze_aura':
            if (distanceToPlayer < 220) {
                game.applyStatusEffect(game.player, 'SLOW');
                if (Math.random() < 0.05) {
                    game.particles.push(new Particle(
                        game.player.x,
                        game.player.y,
                        '#88ddff',
                        'spark'
                    ));
                }
            }
            break;
            
        case 'teleport':
            if (enemy.teleportCooldown <= 0 && (distanceToPlayer < 100 || distanceToPlayer > 450 || Math.random() < 0.01)) {
                const angle = Math.random() * Math.PI * 2;
                const teleportDist = 180 + Math.random() * 120;
                const newX = game.player.x + Math.cos(angle) * teleportDist;
                const newY = game.player.y + Math.sin(angle) * teleportDist;
                
                if (game.canMove(newX, newY, enemy.width, enemy.height)) {
                    for (let i = 0; i < 30; i++) {
                        game.particles.push(new Particle(
                            enemy.x + enemy.width / 2,
                            enemy.y + enemy.height / 2,
                            '#8800ff',
                            'spark'
                        ));
                    }
                    
                    enemy.x = newX;
                    enemy.y = newY;
                    
                    for (let i = 0; i < 30; i++) {
                        game.particles.push(new Particle(
                            enemy.x + enemy.width / 2,
                            enemy.y + enemy.height / 2,
                            '#8800ff',
                            'spark'
                        ));
                    }
                    
                    enemy.teleportCooldown = 8000;
                    game.addMessage(`${enemy.bossType.name} teleported!`, 'info');
                    game.screenShake = 0.4;
                }
            }
            break;
            
        case 'raise_dead':
            if (enemy.specialAttackCooldown <= 0) {
                const numSkeletons = 2 + Math.floor(Math.random() * 3);
                for (let i = 0; i < numSkeletons; i++) {
                    spawnEnemyEnhanced(game,
                        enemy.x + (Math.random() - 0.5) * 200,
                        enemy.y + (Math.random() - 0.5) * 200,
                        game.currentFloor - 2
                    );
                }
                game.addMessage(`${enemy.bossType.name} raised the dead!`, 'damage');
                enemy.specialAttackCooldown = 15000;
                game.screenShake = 0.6;
            }
            break;
            
        case 'void_rift':
            if (enemy.specialAttackCooldown <= 0 && distanceToPlayer < 350) {
                // Create void rifts that damage over time
                for (let i = 0; i < 3; i++) {
                    const angle = (i / 3) * Math.PI * 2 + (Date.now() / 1000);
                    const riftX = enemy.x + Math.cos(angle) * 150;
                    const riftY = enemy.y + Math.sin(angle) * 150;
                    
                    for (let j = 0; j < 20; j++) {
                        game.particles.push(new Particle(
                            riftX,
                            riftY,
                            '#440088',
                            'circle'
                        ));
                    }
                }
                
                // Apply damage if player too close
                if (distanceToPlayer < 180) {
                    game.player.health -= enemy.damage * 0.5;
                    game.addMessage('Void Rift damages you!', 'damage');
                    game.screenShake = 0.8;
                }
                
                enemy.specialAttackCooldown = 12000;
            }
            break;
    }
}

// Enhanced enemy spawning
function spawnEnemyEnhanced(game, x, y, floorOverride = null) {
    if (game.enemies && game.enemies.length >= (CONFIG.MAX_ENEMIES || 50)) {
        return null;
    }
    const types = Object.values(ENHANCED_ENEMY_TYPES);
    const currentFloor = floorOverride !== null ? floorOverride : game.currentFloor;
    const difficultyMultiplier = 1 + (currentFloor - 1) * 0.35;
    
    // Select enemy based on floor
    let enemyType;
    if (currentFloor > 8) {
        enemyType = types[Math.floor(Math.random() * types.length)];
    } else if (currentFloor > 5) {
        enemyType = types[Math.floor(Math.random() * Math.min(7, types.length))];
    } else if (currentFloor > 3) {
        enemyType = types[Math.floor(Math.random() * Math.min(5, types.length))];
    } else {
        enemyType = types[Math.floor(Math.random() * Math.min(3, types.length))];
    }
    
    const enemy = {
        x,
        y,
        width: enemyType.size,
        height: enemyType.size,
        type: enemyType.type,
        health: Math.floor(enemyType.health * difficultyMultiplier),
        maxHealth: Math.floor(enemyType.health * difficultyMultiplier),
        damage: Math.floor(enemyType.damage * difficultyMultiplier),
        xp: Math.floor(enemyType.xp * difficultyMultiplier),
        speed: enemyType.speed,
        color: enemyType.color,
        attackCooldown: 0,
        aiState: 'idle',
        targetX: x,
        targetY: y,
        ranged: enemyType.ranged || false,
        canSummon: enemyType.summon || false,
        summonCooldown: 0,
        statusEffects: [],
        behavior: enemyType.behavior,
        preferredDistance: enemyType.preferredDistance || 0,
        teleportChance: enemyType.teleportChance || 0,
        teleportCooldown: 0,
        dodgeCooldown: 0,
        specialCooldown: 0,
        flankAngle: Math.random() * Math.PI * 2,
        lastPlayerX: game.player.x,
        lastPlayerY: game.player.y
    };
    
    game.enemies.push(enemy);
    return enemy;
}

// Export functions for use in main game
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        ENHANCED_ENEMY_TYPES,
        updateEnemyEnhanced,
        spawnEnemyEnhanced,
        updateBossAbilityEnhanced
    };
}
