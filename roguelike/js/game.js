// Game Configuration
const CONFIG = {
    TILE_SIZE: 32,
    CANVAS_WIDTH: 800,
    CANVAS_HEIGHT: 500,
    DUNGEON_WIDTH: 50,
    DUNGEON_HEIGHT: 40,
    PLAYER_SPEED: 180,
    ENEMY_SPEED: 100,
    ATTACK_RANGE: 150,
    ATTACK_COOLDOWN: 400,
    ENEMY_ATTACK_COOLDOWN: 1000,
    AUTO_ATTACK_RANGE: 200
};

// Tile types
const TILES = {
    FLOOR: 0,
    WALL: 1,
    STAIRS: 2,
    LAVA: 3,
    WATER: 4,
    ICE: 5
};

// Entity types
const ENTITY_TYPES = {
    PLAYER: 'player',
    GOBLIN: 'goblin',
    ORC: 'orc',
    SKELETON: 'skeleton',
    DEMON: 'demon',
    BOSS: 'boss',
    CHEST: 'chest',
    LOOT: 'loot',
    WRAITH: 'wraith',
    ARCHER: 'archer',
    NECROMANCER: 'necromancer'
};

// Equipment types
const EQUIPMENT_TYPES = {
    WEAPON: 'weapon',
    ARMOR: 'armor',
    ACCESSORY: 'accessory'
};

// Weapons
const WEAPONS = {
    BASIC_SWORD: { name: 'Basic Sword', damage: 15, speed: 1.0, color: '#cccccc' },
    FIRE_BLADE: { name: 'Fire Blade', damage: 25, speed: 0.9, color: '#ff4400', effect: 'burn' },
    LIGHTNING_STAFF: { name: 'Lightning Staff', damage: 20, speed: 1.2, color: '#00ffff', effect: 'shock' },
    SHADOW_DAGGER: { name: 'Shadow Dagger', damage: 18, speed: 1.5, color: '#8800ff', effect: 'lifesteal' },
    HEAVY_HAMMER: { name: 'Heavy Hammer', damage: 35, speed: 0.7, color: '#888888', effect: 'stun' },
    FROST_BOW: { name: 'Frost Bow', damage: 22, speed: 1.1, color: '#88ddff', effect: 'slow' },
    POISON_BLADE: { name: 'Poison Blade', damage: 16, speed: 1.3, color: '#00ff44', effect: 'poison' }
};

// Armor
const ARMORS = {
    CLOTH: { name: 'Cloth Armor', defense: 0, speed: 1.0 },
    LEATHER: { name: 'Leather Armor', defense: 5, speed: 0.95 },
    CHAINMAIL: { name: 'Chainmail', defense: 10, speed: 0.85 },
    PLATE: { name: 'Plate Armor', defense: 20, speed: 0.7 },
    DRAGON_SCALE: { name: 'Dragon Scale', defense: 15, speed: 0.9 },
    SHADOW_CLOAK: { name: 'Shadow Cloak', defense: 8, speed: 1.05 }
};

// Accessories
const ACCESSORIES = {
    HEALTH_RING: { name: 'Health Ring', effect: 'maxHealth', value: 50 },
    DAMAGE_AMULET: { name: 'Damage Amulet', effect: 'damage', value: 10 },
    SPEED_BOOTS: { name: 'Speed Boots', effect: 'speed', value: 1.2 },
    CRIT_RING: { name: 'Crit Ring', effect: 'critChance', value: 0.15 },
    VAMPIRE_FANG: { name: 'Vampire Fang', effect: 'lifesteal', value: 0.2 },
    GOLD_CHARM: { name: 'Gold Charm', effect: 'goldMultiplier', value: 1.5 }
};

// Loot types
const LOOT_TYPES = {
    HEALTH_POTION: 'health_potion',
    DAMAGE_BOOST: 'damage_boost',
    SPEED_BOOST: 'speed_boost',
    SHIELD: 'shield',
    WEAPON: 'weapon',
    ARMOR: 'armor',
    ACCESSORY: 'accessory',
    XP_BOOST: 'xp_boost',
    INVINCIBILITY: 'invincibility'
};

// Ability types
const ABILITIES = {
    DASH: 'dash',
    AREA_ATTACK: 'area_attack',
    HEAL: 'heal'
};

// Character Classes
const CHARACTER_CLASSES = {
    WARRIOR: {
        name: 'Warrior',
        health: 120,
        damage: 20,
        speed: 170,
        weapon: WEAPONS.BASIC_SWORD,
        armor: ARMORS.CHAINMAIL,
        color: '#ff6666'
    },
    ROGUE: {
        name: 'Rogue',
        health: 80,
        damage: 15,
        speed: 220,
        weapon: WEAPONS.SHADOW_DAGGER,
        armor: ARMORS.LEATHER,
        color: '#8844ff'
    },
    MAGE: {
        name: 'Mage',
        health: 70,
        damage: 25,
        speed: 160,
        weapon: WEAPONS.LIGHTNING_STAFF,
        armor: ARMORS.CLOTH,
        color: '#44aaff'
    }
};

// Special Room Types
const ROOM_TYPES = {
    NORMAL: 'normal',
    TREASURE: 'treasure',
    CHALLENGE: 'challenge',
    SHOP: 'shop',
    SHRINE: 'shrine'
};

// Boss Types with unique abilities
const BOSS_TYPES = {
    GOBLIN_KING: {
        name: 'Goblin King',
        color: '#00ff00',
        ability: 'summon_minions',
        healthMult: 1.0,
        damageMult: 1.0
    },
    FLAME_LORD: {
        name: 'Flame Lord',
        color: '#ff4400',
        ability: 'fire_nova',
        healthMult: 1.2,
        damageMult: 1.1
    },
    ICE_QUEEN: {
        name: 'Ice Queen',
        color: '#88ddff',
        ability: 'freeze_aura',
        healthMult: 1.0,
        damageMult: 0.9
    },
    SHADOW_DEMON: {
        name: 'Shadow Demon',
        color: '#8800ff',
        ability: 'teleport',
        healthMult: 0.9,
        damageMult: 1.2
    },
    NECROMANCER: {
        name: 'Necromancer',
        color: '#44ff88',
        ability: 'raise_dead',
        healthMult: 0.8,
        damageMult: 1.0
    }
};

// Achievements
const ACHIEVEMENTS = {
    FIRST_KILL: { name: 'First Blood', desc: 'Defeat your first enemy', unlocked: false },
    FLOOR_5: { name: 'Deep Diver', desc: 'Reach floor 5', unlocked: false },
    FLOOR_10: { name: 'Cave Explorer', desc: 'Reach floor 10', unlocked: false },
    BOSS_SLAYER: { name: 'Boss Slayer', desc: 'Defeat a boss', unlocked: false },
    HOARDER: { name: 'Hoarder', desc: 'Collect 1000 gold', unlocked: false },
    SURVIVOR: { name: 'Survivor', desc: 'Reach level 10', unlocked: false },
    SPEED_RUNNER: { name: 'Speed Runner', desc: 'Clear 5 floors in under 5 minutes', unlocked: false }
};

// Status Effects
const STATUS_EFFECTS = {
    BURN: { name: 'Burning', color: '#ff4400', damagePerSecond: 5, duration: 3000 },
    POISON: { name: 'Poisoned', color: '#00ff44', damagePerSecond: 3, duration: 5000 },
    SLOW: { name: 'Slowed', color: '#88ddff', speedMultiplier: 0.5, duration: 2000 },
    STUN: { name: 'Stunned', color: '#ffff00', duration: 1000 },
    SHOCK: { name: 'Shocked', color: '#00ffff', damageMultiplier: 1.5, duration: 2000 }
};

// Particle class
class Particle {
    constructor(x, y, color, type = 'circle') {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 200;
        this.vy = (Math.random() - 0.5) * 200 - 50;
        this.life = 1.0;
        this.decay = Math.random() * 2 + 1;
        this.size = Math.random() * 4 + 2;
        this.color = color;
        this.type = type;
        this.gravity = 200;
    }
    
    update(dt) {
        this.x += this.vx * dt;
        this.y += this.vy * dt;
        this.vy += this.gravity * dt;
        this.life -= this.decay * dt;
        return this.life > 0;
    }
    
    render(ctx, camera) {
        const screenX = this.x - camera.x;
        const screenY = this.y - camera.y;
        
        ctx.save();
        ctx.globalAlpha = Math.max(0, this.life);
        
        if (this.type === 'circle') {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(screenX, screenY, this.size, 0, Math.PI * 2);
            ctx.fill();
        } else if (this.type === 'spark') {
            ctx.strokeStyle = this.color;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(screenX, screenY);
            ctx.lineTo(screenX + this.vx * 0.05, screenY + this.vy * 0.05);
            ctx.stroke();
        }
        
        ctx.restore();
    }
}

// Damage number class
class DamageNumber {
    constructor(x, y, damage, color = '#ff0000', isCrit = false) {
        this.x = x;
        this.y = y;
        this.damage = damage;
        this.color = color;
        this.life = 1.0;
        this.vy = -100;
        this.isCrit = isCrit;
    }
    
    update(dt) {
        this.y += this.vy * dt;
        this.life -= dt;
        return this.life > 0;
    }
    
    render(ctx, camera) {
        const screenX = this.x - camera.x;
        const screenY = this.y - camera.y;
        
        ctx.save();
        ctx.globalAlpha = Math.max(0, this.life);
        ctx.fillStyle = this.color;
        ctx.font = this.isCrit ? 'bold 20px monospace' : 'bold 16px monospace';
        ctx.textAlign = 'center';
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 3;
        ctx.strokeText(this.damage, screenX, screenY);
        ctx.fillText(this.damage, screenX, screenY);
        ctx.restore();
    }
}

class Game {
    constructor() {
        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = CONFIG.CANVAS_WIDTH;
        this.canvas.height = CONFIG.CANVAS_HEIGHT;
        
        // Minimap setup
        this.minimapCanvas = document.getElementById('minimapCanvas');
        if (!this.minimapCanvas) {
            console.error('Minimap canvas not found!');
        } else {
            this.minimapCtx = this.minimapCanvas.getContext('2d');
            this.minimapCanvas.width = 250;
            this.minimapCanvas.height = 200;
            this.minimapScale = 4;
        }
        
        this.keys = {};
        this.lastTime = 0;
        this.isPaused = false;
        this.projectiles = [];
        this.enemyProjectiles = [];
        this.exploredTiles = [];
        this.particles = [];
        this.damageNumbers = [];
        this.screenShake = 0;
        this.startTime = Date.now();
        this.setupResponsive();
        
        // Load saved data
        this.loadGame();
        
        // Show class selection if first time
        if (!this.selectedClass) {
            this.showClassSelection();
            return;
        }
        
        this.initializePlayer();
        this.setupControls();
        this.generateDungeon();
        this.updateEquipmentStats();
        this.gameLoop();
    }
    
    showClassSelection() {
        const modal = document.createElement('div');
        modal.className = 'class-selection-screen show';
        modal.innerHTML = `
            <div class="class-selection-content">
                <h1>Choose Your Class</h1>
                <div class="class-options">
                    <button onclick="game.selectClass('WARRIOR')" class="class-button">
                        <strong>⚔️ WARRIOR</strong>
                        <span>High health and defense</span>
                        <span class="class-stats">HP: 120 | DMG: 20 | SPD: Medium</span>
                    </button>
                    <button onclick="game.selectClass('ROGUE')" class="class-button">
                        <strong>🗡️ ROGUE</strong>
                        <span>Fast and deadly</span>
                        <span class="class-stats">HP: 80 | DMG: 15 | SPD: Very Fast</span>
                    </button>
                    <button onclick="game.selectClass('MAGE')" class="class-button">
                        <strong>🔮 MAGE</strong>
                        <span>High damage, low defense</span>
                        <span class="class-stats">HP: 70 | DMG: 25 | SPD: Slow</span>
                    </button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }
    
    selectClass(className) {
        this.selectedClass = className;
        this.saveGame();
        
        // Remove class selection screen
        const modal = document.querySelector('.class-selection-screen');
        if (modal) modal.remove();
        
        // Initialize game
        this.initializePlayer();
        this.setupControls();
        this.generateDungeon();
        this.updateEquipmentStats();
        this.gameLoop();
    }
    
    initializePlayer() {
        const charClass = CHARACTER_CLASSES[this.selectedClass];
        
        this.player = {
            x: 0,
            y: 0,
            width: 24,
            height: 24,
            baseSpeed: charClass.speed,
            speed: charClass.speed,
            health: charClass.health,
            maxHealth: charClass.health,
            baseDamage: charClass.damage,
            damage: charClass.damage,
            level: 1,
            xp: 0,
            xpToLevel: 100,
            gold: 0,
            potions: 3,
            isAttacking: false,
            attackCooldown: 0,
            attackTarget: null,
            kills: 0,
            critChance: 0.1,
            lifesteal: 0,
            goldMultiplier: 1,
            className: charClass.name,
            classColor: charClass.color,
            // Equipment
            equipment: {
                weapon: charClass.weapon,
                armor: charClass.armor,
                accessory: null
            },
            // Abilities
            abilities: {
                dash: { cooldown: 0, maxCooldown: 3000 },
                areaAttack: { cooldown: 0, maxCooldown: 5000 },
                heal: { cooldown: 0, maxCooldown: 10000 }
            },
            // Active buffs
            buffs: {
                damageBoost: { active: false, duration: 0, multiplier: 1.5 },
                speedBoost: { active: false, duration: 0, multiplier: 1.5 },
                shield: { active: false, duration: 0, absorption: 0 },
                xpBoost: { active: false, duration: 0, multiplier: 2 },
                invincibility: { active: false, duration: 0 }
            },
            // Status effects
            statusEffects: []
        };
        
        this.camera = {
            x: 0,
            y: 0
        };
        
        this.currentFloor = 1;
        this.enemies = [];
        this.items = [];
        this.lootDrops = [];
        this.bossSpawned = false;
        this.rooms = [];
        
        // Sound system
        this.sounds = {};
        this.initSounds();
    }
    
    loadGame() {
        try {
            const saved = localStorage.getItem('roguelikeSave');
            if (saved) {
                const data = JSON.parse(saved);
                this.selectedClass = data.selectedClass;
                this.achievements = data.achievements || ACHIEVEMENTS;
                this.metaProgress = data.metaProgress || {
                    totalKills: 0,
                    totalGold: 0,
                    highestFloor: 0,
                    gamesPlayed: 0
                };
            } else {
                this.achievements = JSON.parse(JSON.stringify(ACHIEVEMENTS));
                this.metaProgress = {
                    totalKills: 0,
                    totalGold: 0,
                    highestFloor: 0,
                    gamesPlayed: 0
                };
            }
        } catch (e) {
            console.error('Failed to load save:', e);
            this.achievements = JSON.parse(JSON.stringify(ACHIEVEMENTS));
            this.metaProgress = {
                totalKills: 0,
                totalGold: 0,
                highestFloor: 0,
                gamesPlayed: 0
            };
        }
    }
    
    saveGame() {
        try {
            const data = {
                selectedClass: this.selectedClass,
                achievements: this.achievements,
                metaProgress: this.metaProgress
            };
            localStorage.setItem('roguelikeSave', JSON.stringify(data));
        } catch (e) {
            console.error('Failed to save:', e);
        }
    }
    
    unlockAchievement(achievementKey) {
        if (this.achievements[achievementKey] && !this.achievements[achievementKey].unlocked) {
            this.achievements[achievementKey].unlocked = true;
            const achievement = this.achievements[achievementKey];
            this.addMessage(`🏆 Achievement: ${achievement.name}!`, 'gold');
            this.saveGame();
        }
    }
    
    initSounds() {
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
    
    playSound(type, frequency = 440, duration = 0.1) {
        if (!this.audioContext) return;
        
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        switch(type) {
            case 'attack':
                oscillator.frequency.value = 800;
                gainNode.gain.setValueAtTime(0.3, this.audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.1);
                oscillator.start();
                oscillator.stop(this.audioContext.currentTime + 0.1);
                break;
            case 'hit':
                oscillator.frequency.value = 200;
                gainNode.gain.setValueAtTime(0.4, this.audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.15);
                oscillator.start();
                oscillator.stop(this.audioContext.currentTime + 0.15);
                break;
            case 'pickup':
                oscillator.frequency.value = 1200;
                gainNode.gain.setValueAtTime(0.2, this.audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.2);
                oscillator.start();
                oscillator.stop(this.audioContext.currentTime + 0.2);
                break;
            case 'ability':
                oscillator.frequency.value = 600;
                gainNode.gain.setValueAtTime(0.3, this.audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.3);
                oscillator.start();
                oscillator.stop(this.audioContext.currentTime + 0.3);
                break;
            case 'death':
                oscillator.frequency.value = 150;
                gainNode.gain.setValueAtTime(0.3, this.audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.4);
                oscillator.start();
                oscillator.stop(this.audioContext.currentTime + 0.4);
                break;
            case 'boss':
                oscillator.frequency.value = 100;
                gainNode.gain.setValueAtTime(0.5, this.audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.5);
                oscillator.start();
                oscillator.stop(this.audioContext.currentTime + 0.5);
                break;
        }
    }
    
    updateEquipmentStats() {
        // Calculate total damage from weapon
        this.player.damage = this.player.baseDamage + this.player.equipment.weapon.damage;
        
        // Calculate speed from weapon and armor
        const weaponSpeedMod = this.player.equipment.weapon.speed;
        const armorSpeedMod = this.player.equipment.armor.speed;
        this.player.speed = this.player.baseSpeed * weaponSpeedMod * armorSpeedMod;
        
        // Apply accessory bonuses
        if (this.player.equipment.accessory) {
            const acc = this.player.equipment.accessory;
            switch(acc.effect) {
                case 'maxHealth':
                    const oldMaxHealth = this.player.maxHealth;
                    this.player.maxHealth = this.player.baseMaxHealth + acc.value;
                    // Scale current health proportionally
                    if (oldMaxHealth > 0) {
                        const healthPercent = this.player.health / oldMaxHealth;
                        this.player.health = Math.floor(this.player.maxHealth * healthPercent);
                    }
                    break;
                case 'damage':
                    this.player.damage += acc.value;
                    break;
                case 'speed':
                    this.player.speed *= acc.value;
                    break;
                case 'critChance':
                    this.player.critChance = 0.1 + acc.value;
                    break;
                case 'lifesteal':
                    this.player.lifesteal = acc.value;
                    break;
                case 'goldMultiplier':
                    this.player.goldMultiplier = acc.value;
                    break;
            }
        }
        
        // Store base max health for accessory calculations
        if (!this.player.baseMaxHealth) {
            this.player.baseMaxHealth = this.player.maxHealth;
        }
    }
    
    setupControls() {
        window.addEventListener('keydown', (e) => {
            this.keys[e.key.toLowerCase()] = true;
            
            // Use potion with E
            if (e.key.toLowerCase() === 'e') {
                this.usePotion();
            }
            
            // Abilities
            if (e.key === '1') {
                this.useDash();
            }
            if (e.key === '2') {
                this.useAreaAttack();
            }
            if (e.key === '3') {
                this.useHeal();
            }
            
            // Prevent spacebar from scrolling
            if (e.key === ' ') {
                e.preventDefault();
            }
        });
        
        window.addEventListener('keyup', (e) => {
            this.keys[e.key.toLowerCase()] = false;
        });
    }
    
    generateDungeon() {
        // Create dungeon grid
        this.dungeon = [];
        for (let y = 0; y < CONFIG.DUNGEON_HEIGHT; y++) {
            this.dungeon[y] = [];
            for (let x = 0; x < CONFIG.DUNGEON_WIDTH; x++) {
                this.dungeon[y][x] = TILES.WALL;
            }
        }
        
        // Initialize explored tiles
        this.exploredTiles = [];
        for (let y = 0; y < CONFIG.DUNGEON_HEIGHT; y++) {
            this.exploredTiles[y] = [];
            for (let x = 0; x < CONFIG.DUNGEON_WIDTH; x++) {
                this.exploredTiles[y][x] = false;
            }
        }
        
        // Generate rooms
        this.rooms = [];
        const numRooms = 15 + Math.floor(Math.random() * 8);
        
        for (let i = 0; i < numRooms; i++) {
            const width = 8 + Math.floor(Math.random() * 10);
            const height = 8 + Math.floor(Math.random() * 10);
            const x = Math.floor(Math.random() * (CONFIG.DUNGEON_WIDTH - width - 2)) + 1;
            const y = Math.floor(Math.random() * (CONFIG.DUNGEON_HEIGHT - height - 2)) + 1;
            
            const room = { x, y, width, height, type: ROOM_TYPES.NORMAL };
            let overlaps = false;
            
            for (const other of this.rooms) {
                if (this.roomsOverlap(room, other)) {
                    overlaps = true;
                    break;
                }
            }
            
            if (!overlaps) {
                // Assign special room types
                if (i > 2 && Math.random() < 0.2) {
                    const types = [ROOM_TYPES.TREASURE, ROOM_TYPES.SHOP, ROOM_TYPES.SHRINE];
                    room.type = types[Math.floor(Math.random() * types.length)];
                }
                
                this.carveRoom(room);
                this.rooms.push(room);
                
                if (this.rooms.length > 1) {
                    this.connectRooms(this.rooms[this.rooms.length - 2], room);
                }
            }
        }
        
        // Place player in first room
        const startRoom = this.rooms[0];
        this.player.x = (startRoom.x + Math.floor(startRoom.width / 2)) * CONFIG.TILE_SIZE;
        this.player.y = (startRoom.y + Math.floor(startRoom.height / 2)) * CONFIG.TILE_SIZE;
        
        // Place stairs in last room
        const endRoom = this.rooms[this.rooms.length - 1];
        const stairsX = endRoom.x + Math.floor(endRoom.width / 2);
        const stairsY = endRoom.y + Math.floor(endRoom.height / 2);
        this.dungeon[stairsY][stairsX] = TILES.STAIRS;
        
        // Spawn enemies and items
        this.enemies = [];
        this.items = [];
        this.lootDrops = [];
        this.bossSpawned = false;
        
        // Check if this is a boss floor (every 5 floors)
        const isBossFloor = this.currentFloor % 5 === 0;
        
        if (isBossFloor) {
            // Spawn boss in the last room
            const bossRoom = this.rooms[this.rooms.length - 1];
            const bossX = (bossRoom.x + Math.floor(bossRoom.width / 2)) * CONFIG.TILE_SIZE;
            const bossY = (bossRoom.y + Math.floor(bossRoom.height / 2)) * CONFIG.TILE_SIZE;
            this.spawnBoss(bossX, bossY);
            this.bossSpawned = true;
            this.addMessage('⚠️ WARNING: Boss detected on this floor!', 'damage');
        } else {
            // Normal enemy spawning and special rooms
            for (let i = 1; i < this.rooms.length - 1; i++) {
                const room = this.rooms[i];
                
                // Handle special room types
                if (room.type === ROOM_TYPES.TREASURE) {
                    this.populateTreasureRoom(room);
                } else if (room.type === ROOM_TYPES.SHOP) {
                    this.populateShopRoom(room);
                } else if (room.type === ROOM_TYPES.SHRINE) {
                    this.populateShrineRoom(room);
                } else {
                    // Normal room with enemies
                    const numEnemies = 2 + Math.floor(Math.random() * 4);
                    for (let j = 0; j < numEnemies; j++) {
                        const enemyX = (room.x + 1 + Math.floor(Math.random() * (room.width - 2))) * CONFIG.TILE_SIZE;
                        const enemyY = (room.y + 1 + Math.floor(Math.random() * (room.height - 2))) * CONFIG.TILE_SIZE;
                        this.spawnEnemy(enemyX, enemyY);
                    }
                }

                // Chance to spawn chest
                if (Math.random() < 0.3) {
                    const chestX = (room.x + 1 + Math.floor(Math.random() * (room.width - 2))) * CONFIG.TILE_SIZE;
                    const chestY = (room.y + 1 + Math.floor(Math.random() * (room.height - 2))) * CONFIG.TILE_SIZE;
                    this.items.push({
                        x: chestX,
                        y: chestY,
                        type: ENTITY_TYPES.CHEST,
                        opened: false,
                        width: 24,
                        height: 24
                    });
                }
            }

            // Check achievements
            if (this.currentFloor >= 5) this.unlockAchievement('FLOOR_5');
            if (this.currentFloor >= 10) this.unlockAchievement('FLOOR_10');
        }
    }

populateTreasureRoom(room) {
    const numChests = 3 + Math.floor(Math.random() * 3);
    for (let i = 0; i < numChests; i++) {
        const chestX = (room.x + 1 + Math.floor(Math.random() * (room.width - 2))) * CONFIG.TILE_SIZE;
        const chestY = (room.y + 1 + Math.floor(Math.random() * (room.height - 2))) * CONFIG.TILE_SIZE;
        this.items.push({
            x: chestX,
            y: chestY,
            type: ENTITY_TYPES.CHEST,
            opened: false,
            width: 24,
            height: 24,
            treasure: true
        });
    }
}

populateShopRoom(room) {
    const centerX = (room.x + Math.floor(room.width / 2)) * CONFIG.TILE_SIZE;
    const centerY = (room.y + Math.floor(room.height / 2)) * CONFIG.TILE_SIZE;
    for (let i = 0; i < 3; i++) {
        const lootX = centerX + (i - 1) * 40;
        this.lootDrops.push({
            x: lootX,
            y: centerY,
            width: 16,
            height: 16,
            type: i === 1 ? LOOT_TYPES.HEALTH_POTION : LOOT_TYPES.DAMAGE_BOOST,
            pickupRadius: 30
        });
    }
}

populateShrineRoom(room) {
    const centerX = (room.x + Math.floor(room.width / 2)) * CONFIG.TILE_SIZE;
    const centerY = (room.y + Math.floor(room.height / 2)) * CONFIG.TILE_SIZE;
    this.items.push({
        x: centerX,
        y: centerY,
        type: 'shrine',
        width: 32,
        height: 32,
        used: false
    });
}

roomsOverlap(room1, room2) {
    return room1.x < room2.x + room2.width + 1 &&
           room1.x + room1.width + 1 > room2.x &&
           room1.y < room2.y + room2.height + 1 &&
           room1.y + room1.height + 1 > room2.y;
}

carveRoom(room) {
    for (let y = room.y; y < room.y + room.height; y++) {
        for (let x = room.x; x < room.x + room.width; x++) {
            this.dungeon[y][x] = TILES.FLOOR;
        }
    }
}

connectRooms(room1, room2) {
    const x1 = Math.floor(room1.x + room1.width / 2);
    const y1 = Math.floor(room1.y + room1.height / 2);
    const x2 = Math.floor(room2.x + room2.width / 2);
    const y2 = Math.floor(room2.y + room2.height / 2);
    
    if (Math.random() < 0.5) {
        this.carveCorridor(x1, y1, x2, y1);
        this.carveCorridor(x2, y1, x2, y2);
    } else {
        this.carveCorridor(x1, y1, x1, y2);
        this.carveCorridor(x1, y2, x2, y2);
    }
}

carveCorridor(x1, y1, x2, y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const steps = Math.abs(dx) + Math.abs(dy);
    
    for (let i = 0; i <= steps; i++) {
        const t = steps === 0 ? 0 : i / steps;
        const x = Math.round(x1 + dx * t);
        const y = Math.round(y1 + dy * t);
        
        if (x >= 0 && x < CONFIG.DUNGEON_WIDTH && y >= 0 && y < CONFIG.DUNGEON_HEIGHT) {
            this.dungeon[y][x] = TILES.FLOOR;
        }
    }
}

spawnBoss(x, y) {
    const bossLevel = Math.floor(this.currentFloor / 5);
    const baseHealth = 200;
    const baseDamage = 20;
    
    // Select random boss type
    const bossTypes = Object.values(BOSS_TYPES);
    const selectedBoss = bossTypes[Math.floor(Math.random() * bossTypes.length)];
    
    this.enemies.push({
        x,
        y,
        width: 48,
        height: 48,
        type: ENTITY_TYPES.BOSS,
        bossType: selectedBoss,
        health: Math.floor(baseHealth * bossLevel * selectedBoss.healthMult),
        maxHealth: Math.floor(baseHealth * bossLevel * selectedBoss.healthMult),
        damage: Math.floor((baseDamage + (bossLevel * 5)) * selectedBoss.damageMult),
        xp: 200 * bossLevel,
        speed: CONFIG.ENEMY_SPEED * 0.5,
        color: selectedBoss.color,
        attackCooldown: 0,
        aiState: 'idle',
        targetX: x,
        targetY: y,
        isBoss: true,
        specialAttackCooldown: 0,
        teleportCooldown: 0,
        statusEffects: []
    });
    
    this.addMessage(`${selectedBoss.name} has appeared!`, 'damage');
}

spawnEnemy(x, y) {
    const types = [
        { type: ENTITY_TYPES.GOBLIN, health: 30, damage: 8, xp: 20, speed: CONFIG.ENEMY_SPEED, color: '#00ff00' },
        { type: ENTITY_TYPES.ORC, health: 50, damage: 12, xp: 35, speed: CONFIG.ENEMY_SPEED * 0.8, color: '#ff6600' },
        { type: ENTITY_TYPES.SKELETON, health: 40, damage: 10, xp: 25, speed: CONFIG.ENEMY_SPEED * 0.9, color: '#cccccc' },
        { type: ENTITY_TYPES.DEMON, health: 70, damage: 15, xp: 50, speed: CONFIG.ENEMY_SPEED * 0.7, color: '#ff0066' },
        { type: ENTITY_TYPES.WRAITH, health: 35, damage: 14, xp: 30, speed: CONFIG.ENEMY_SPEED * 1.2, color: '#8844ff' },
        { type: ENTITY_TYPES.ARCHER, health: 25, damage: 12, xp: 28, speed: CONFIG.ENEMY_SPEED * 0.6, color: '#44ff44', ranged: true },
        { type: ENTITY_TYPES.NECROMANCER, health: 45, damage: 16, xp: 40, speed: CONFIG.ENEMY_SPEED * 0.5, color: '#44ff88', ranged: true, summon: true }
    ];
    
    // Scale difficulty with floor
    const difficultyMultiplier = 1 + (this.currentFloor - 1) * 0.3;
    
    // Higher chance for stronger enemies on deeper floors
    let enemyType;
    if (this.currentFloor > 7) {
        enemyType = types[Math.floor(Math.random() * types.length)];
    } else if (this.currentFloor > 5) {
        enemyType = types[Math.floor(Math.random() * 5)];
    } else if (this.currentFloor > 3) {
        enemyType = types[Math.floor(Math.random() * 4)];
    } else {
        enemyType = types[Math.floor(Math.random() * 2)];
    }
    
    this.enemies.push({
        x,
        y,
        width: 24,
        height: 24,
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
        statusEffects: []
    });
}

applyStatusEffect(target, effectType) {
    const effect = STATUS_EFFECTS[effectType];
    if (!effect) return;
    
    // Check if effect already exists
    const existing = target.statusEffects.find(e => e.type === effectType);
    if (existing) {
        // Refresh duration
        existing.duration = effect.duration;
    } else {
        target.statusEffects.push({
            type: effectType,
            ...effect,
            duration: effect.duration,
            damageTimer: 0
        });
    }
}

updateStatusEffects(target, dt) {
    for (let i = target.statusEffects.length - 1; i >= 0; i--) {
        const effect = target.statusEffects[i];
        effect.duration -= dt * 1000;
        
        // Apply damage over time effects
        if (effect.damagePerSecond) {
            effect.damageTimer += dt * 1000;
            if (effect.damageTimer >= 1000) {
                target.health -= effect.damagePerSecond;
                effect.damageTimer = 0;
                
                // Damage number
                this.damageNumbers.push(new DamageNumber(
                    target.x + target.width / 2,
                    target.y,
                    effect.damagePerSecond,
                    effect.color
                ));
            }
        }
        
        // Remove expired effects
        if (effect.duration <= 0) {
            target.statusEffects.splice(i, 1);
        }
    }
}

getStatusEffectMultiplier(target, type) {
    let multiplier = 1;
    for (const effect of target.statusEffects) {
        if (effect[type]) {
            multiplier *= effect[type];
        }
    }
    return multiplier;
}

playerAttack(targetEnemy = null) {
    if (this.player.attackCooldown > 0) return;
    
    this.player.isAttacking = true;
    this.player.attackCooldown = CONFIG.ATTACK_COOLDOWN;
    
    // If no target specified, find closest enemy in range
    if (!targetEnemy) {
        let closestEnemy = null;
        let closestDistance = CONFIG.AUTO_ATTACK_RANGE;
        
        for (const enemy of this.enemies) {
            const dx = enemy.x - this.player.x;
            const dy = enemy.y - this.player.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < closestDistance) {
                closestDistance = distance;
                closestEnemy = enemy;
            }
        }
        
        targetEnemy = closestEnemy;
    }
    
    // Attack the target
    if (targetEnemy) {
        const dx = targetEnemy.x - this.player.x;
        const dy = targetEnemy.y - this.player.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < CONFIG.AUTO_ATTACK_RANGE) {
            let baseDamage = this.player.damage;
            const damageMultiplier = this.player.buffs.damageBoost.active ? this.player.buffs.damageBoost.multiplier : 1;
            
            // Critical hit chance
            const isCrit = Math.random() < this.player.critChance;
            if (isCrit) {
                baseDamage *= 2;
            }
            
            const totalDamage = Math.floor(baseDamage * damageMultiplier);
            
            targetEnemy.health -= totalDamage;
            this.player.attackTarget = targetEnemy;
            
            // Lifesteal
            if (this.player.lifesteal > 0 || this.player.equipment.weapon.effect === 'lifesteal') {
                const lifestealAmount = Math.floor(totalDamage * (this.player.lifesteal + 0.2));
                this.player.health = Math.min(this.player.maxHealth, this.player.health + lifestealAmount);
                
                this.damageNumbers.push(new DamageNumber(
                    this.player.x + this.player.width / 2,
                    this.player.y,
                    `+${lifestealAmount}`,
                    '#ff44ff'
                ));
            }
            
            // Apply weapon effects
            if (this.player.equipment.weapon.effect) {
                switch(this.player.equipment.weapon.effect) {
                    case 'burn':
                        this.applyStatusEffect(targetEnemy, 'BURN');
                        break;
                    case 'poison':
                        this.applyStatusEffect(targetEnemy, 'POISON');
                        break;
                    case 'slow':
                        this.applyStatusEffect(targetEnemy, 'SLOW');
                        break;
                    case 'stun':
                        this.applyStatusEffect(targetEnemy, 'STUN');
                        break;
                    case 'shock':
                        this.applyStatusEffect(targetEnemy, 'SHOCK');
                        break;
                }
            }
            
            // Create projectile effect
            this.createProjectile(this.player.x, this.player.y, targetEnemy.x, targetEnemy.y);
            
            // Play attack sound
            this.playSound('attack');
            
            // Create damage number
            this.damageNumbers.push(new DamageNumber(
                targetEnemy.x + targetEnemy.width / 2,
                targetEnemy.y,
                totalDamage,
                isCrit ? '#ff00ff' : (this.player.buffs.damageBoost.active ? '#ff8800' : '#ffff00'),
                isCrit
            ));
            
            // Create hit particles
            for (let i = 0; i < (isCrit ? 15 : 8); i++) {
                this.particles.push(new Particle(
                    targetEnemy.x + targetEnemy.width / 2,
                    targetEnemy.y + targetEnemy.height / 2,
                    isCrit ? '#ff00ff' : '#ffff00',
                    'spark'
                ));
            }
            
            if (targetEnemy.health <= 0) {
                this.addMessage(`Defeated ${targetEnemy.type}!`, 'damage');
                
                const xpMultiplier = this.player.buffs.xpBoost.active ? this.player.buffs.xpBoost.multiplier : 1;
                this.player.xp += Math.floor(targetEnemy.xp * xpMultiplier);
                this.player.kills++;
                this.metaProgress.totalKills++;
                
                // Check achievements
                if (this.player.kills === 1) this.unlockAchievement('FIRST_KILL');
                if (targetEnemy.isBoss) this.unlockAchievement('BOSS_SLAYER');
                
                // Play death sound
                this.playSound(targetEnemy.isBoss ? 'boss' : 'death');
                
                // Drop gold
                const gold = Math.floor((5 + Math.floor(Math.random() * 10) * this.currentFloor) * this.player.goldMultiplier);
                this.player.gold += gold;
                this.metaProgress.totalGold += gold;
                
                if (this.metaProgress.totalGold >= 1000) this.unlockAchievement('HOARDER');
                
                this.addMessage(`+${gold} gold`, 'gold');
                
                // Drop loot
                this.dropLoot(targetEnemy.x, targetEnemy.y, targetEnemy.isBoss);
                
                // Death particles
                for (let i = 0; i < (targetEnemy.isBoss ? 40 : 20); i++) {
                    this.particles.push(new Particle(
                        targetEnemy.x + targetEnemy.width / 2,
                        targetEnemy.y + targetEnemy.height / 2,
                        targetEnemy.color,
                        'circle'
                    ));
                }
                
                const index = this.enemies.indexOf(targetEnemy);
                if (index > -1) {
                    this.enemies.splice(index, 1);
                }
                this.checkLevelUp();
            }
        }
    }
    
    setTimeout(() => {
        this.player.isAttacking = false;
        this.player.attackTarget = null;
    }, 150);
}

createProjectile(startX, startY, endX, endY) {
    this.projectiles.push({
        x: startX + this.player.width / 2,
        y: startY + this.player.height / 2,
        targetX: endX,
        targetY: endY,
        speed: 800,
        life: 1.0
    });
}

createEnemyProjectile(startX, startY, endX, endY, damage, enemyType) {
    this.enemyProjectiles.push({
        x: startX + 12,
        y: startY + 12,
        targetX: endX + this.player.width / 2,
        targetY: endY + this.player.height / 2,
        speed: 300,
        life: 1.0,
        damage: damage,
        enemyType: enemyType,
        hit: false
    });
}

useDash() {
    if (this.player.abilities.dash.cooldown > 0) return;
    
    // Get dash direction from keys
    let dx = 0;
    let dy = 0;
    if (this.keys['w'] || this.keys['arrowup']) dy -= 1;
    if (this.keys['s'] || this.keys['arrowdown']) dy += 1;
    if (this.keys['a'] || this.keys['arrowleft']) dx -= 1;
    if (this.keys['d'] || this.keys['arrowright']) dx += 1;
    
    if (dx === 0 && dy === 0) dy = -1; // Dash up by default
    
    const length = Math.sqrt(dx * dx + dy * dy);
    dx /= length;
    dy /= length;
    
    // Dash distance
    const dashDistance = 150;
    const newX = this.player.x + dx * dashDistance;
    const newY = this.player.y + dy * dashDistance;
    
    // Check if dash position is valid
    if (this.canMove(newX, newY, this.player.width, this.player.height)) {
        this.player.x = newX;
        this.player.y = newY;
        
        // Dash particles
        for (let i = 0; i < 15; i++) {
            this.particles.push(new Particle(
                this.player.x + this.player.width / 2,
                this.player.y + this.player.height / 2,
                '#00ffff',
                'spark'
            ));
        }
        
        this.player.abilities.dash.cooldown = this.player.abilities.dash.maxCooldown;
        this.addMessage('Dash!', 'info');
        this.playSound('ability');
    }
}

useAreaAttack() {
    if (this.player.abilities.areaAttack.cooldown > 0) return;
    
    const radius = 150;
    let hitCount = 0;
    
    for (const enemy of this.enemies) {
        const dx = enemy.x - this.player.x;
        const dy = enemy.y - this.player.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < radius) {
            const damage = Math.floor(this.player.damage * 1.5);
            enemy.health -= damage;
            hitCount++;
            
            // Damage number
            this.damageNumbers.push(new DamageNumber(
                enemy.x + enemy.width / 2,
                enemy.y,
                damage,
                '#ff00ff'
            ));
            
            // Hit particles
            for (let i = 0; i < 10; i++) {
                this.particles.push(new Particle(
                    enemy.x + enemy.width / 2,
                    enemy.y + enemy.height / 2,
                    '#ff00ff',
                    'spark'
                ));
            }
            
            if (enemy.health <= 0) {
                const xpMultiplier = this.player.buffs.xpBoost.active ? this.player.buffs.xpBoost.multiplier : 1;
                this.player.xp += Math.floor(enemy.xp * xpMultiplier);
                this.player.kills++;
                this.metaProgress.totalKills++;
                
                const gold = Math.floor((5 + Math.floor(Math.random() * 10) * this.currentFloor) * this.player.goldMultiplier);
                this.player.gold += gold;
                this.metaProgress.totalGold += gold;
                
                // Drop loot
                this.dropLoot(enemy.x, enemy.y, enemy.isBoss);
                
                const index = this.enemies.indexOf(enemy);
                if (index > -1) this.enemies.splice(index, 1);
            }
        }
    }
    
    // Area effect visual
    for (let i = 0; i < 30; i++) {
        const angle = (i / 30) * Math.PI * 2;
        const x = this.player.x + this.player.width / 2 + Math.cos(angle) * radius;
        const y = this.player.y + this.player.height / 2 + Math.sin(angle) * radius;
        this.particles.push(new Particle(x, y, '#ff00ff', 'circle'));
    }
    
    this.player.abilities.areaAttack.cooldown = this.player.abilities.areaAttack.maxCooldown;
    this.addMessage(`Area Attack! Hit ${hitCount} enemies!`, 'info');
    this.screenShake = 0.7;
    this.playSound('ability');
}

useHeal() {
    if (this.player.abilities.heal.cooldown > 0) return;
    if (this.player.health >= this.player.maxHealth) return;
    
    const healAmount = Math.floor(this.player.maxHealth * 0.3);
    this.player.health = Math.min(this.player.maxHealth, this.player.health + healAmount);
    
    // Heal particles
    for (let i = 0; i < 20; i++) {
        this.particles.push(new Particle(
            this.player.x + this.player.width / 2,
            this.player.y + this.player.height / 2,
            '#00ff00',
            'circle'
        ));
    }
    
    this.damageNumbers.push(new DamageNumber(
        this.player.x + this.player.width / 2,
        this.player.y,
        `+${healAmount}`,
        '#00ff00'
    ));
    
    this.player.abilities.heal.cooldown = this.player.abilities.heal.maxCooldown;
    this.addMessage(`Healed ${healAmount} HP!`, 'heal');
    this.playSound('ability');
}

dropLoot(x, y, isBoss = false) {
    // Bosses always drop good loot
    const dropChance = isBoss ? 1.0 : 0.3;
    
    if (Math.random() < dropChance) {
        let lootType;
        
        if (isBoss) {
            // Bosses have high chance to drop equipment
            const roll = Math.random();
            if (roll < 0.3) {
                lootType = LOOT_TYPES.WEAPON;
            } else if (roll < 0.5) {
                lootType = LOOT_TYPES.ARMOR;
            } else if (roll < 0.65) {
                lootType = LOOT_TYPES.ACCESSORY;
            } else {
                const powerups = [LOOT_TYPES.DAMAGE_BOOST, LOOT_TYPES.SPEED_BOOST, LOOT_TYPES.SHIELD, LOOT_TYPES.XP_BOOST, LOOT_TYPES.INVINCIBILITY];
                lootType = powerups[Math.floor(Math.random() * powerups.length)];
            }
        } else {
            // Regular enemies drop consumables mostly
            const roll = Math.random();
            if (roll < 0.5) {
                lootType = LOOT_TYPES.HEALTH_POTION;
            } else if (roll < 0.85) {
                const consumables = [LOOT_TYPES.DAMAGE_BOOST, LOOT_TYPES.SPEED_BOOST, LOOT_TYPES.SHIELD];
                lootType = consumables[Math.floor(Math.random() * consumables.length)];
            } else if (roll < 0.95) {
                // Small chance for equipment
                lootType = Math.random() < 0.5 ? LOOT_TYPES.WEAPON : LOOT_TYPES.ARMOR;
            } else {
                lootType = LOOT_TYPES.ACCESSORY;
            }
        }
        
        const lootItem = {
            x: x + 12,
            y: y + 12,
            width: 16,
            height: 16,
            type: lootType,
            pickupRadius: 30
        };
        
        // For equipment, add specific item data
        if (lootType === LOOT_TYPES.WEAPON) {
            const weaponKeys = Object.keys(WEAPONS);
            const randomWeapon = weaponKeys[Math.floor(Math.random() * weaponKeys.length)];
            lootItem.equipment = WEAPONS[randomWeapon];
        } else if (lootType === LOOT_TYPES.ARMOR) {
            const armorKeys = Object.keys(ARMORS);
            const randomArmor = armorKeys[Math.floor(Math.random() * armorKeys.length)];
            lootItem.equipment = ARMORS[randomArmor];
        } else if (lootType === LOOT_TYPES.ACCESSORY) {
            const accessoryKeys = Object.keys(ACCESSORIES);
            const randomAccessory = accessoryKeys[Math.floor(Math.random() * accessoryKeys.length)];
            lootItem.equipment = ACCESSORIES[randomAccessory];
        }
        
        this.lootDrops.push(lootItem);
    }
}

usePotion() {
    if (this.player.potions > 0 && this.player.health < this.player.maxHealth) {
        this.player.potions--;
        const healAmount = 50;
        this.player.health = Math.min(this.player.maxHealth, this.player.health + healAmount);
        this.addMessage(`Used potion! +${healAmount} HP`, 'heal');
        this.playSound('pickup');
        this.updateUI();
    }
}

checkLevelUp() {
    while (this.player.xp >= this.player.xpToLevel) {
        this.player.level++;
        this.player.xp -= this.player.xpToLevel;
        this.player.xpToLevel = Math.floor(this.player.xpToLevel * 1.5);
        
        if (this.player.level >= 10) this.unlockAchievement('SURVIVOR');
        
        this.addMessage(`Level Up! Now level ${this.player.level}`, 'info');
        this.showLevelUpScreen();
    }
}

showLevelUpScreen() {
    this.isPaused = true;
    document.getElementById('levelUpScreen').classList.add('show');
}

setupResponsive() {
    const onResize = () => this.resizeCanvases();
    window.addEventListener('resize', onResize);
    this.resizeCanvases();
}

resizeCanvases() {
    const width = Math.max(320, Math.floor(this.canvas.clientWidth || CONFIG.CANVAS_WIDTH));
    const height = Math.max(320, Math.floor(window.innerHeight - 220));
    this.canvas.width = width;
    this.canvas.height = height;
    CONFIG.CANVAS_WIDTH = width;
    CONFIG.CANVAS_HEIGHT = height;
    if (this.minimapCanvas) {
        const miniWidth = Math.max(140, Math.floor(this.minimapCanvas.clientWidth || 250));
        const miniHeight = Math.max(120, Math.floor(miniWidth * 0.8));
        this.minimapCanvas.width = miniWidth;
        this.minimapCanvas.height = miniHeight;
        const scaleX = Math.max(2, Math.floor(this.minimapCanvas.width / CONFIG.DUNGEON_WIDTH));
        const scaleY = Math.max(2, Math.floor(this.minimapCanvas.height / CONFIG.DUNGEON_HEIGHT));
        this.minimapScale = Math.max(2, Math.min(scaleX, scaleY));

        }
}

selectUpgrade(type) {
    switch(type) {
        case 'health':
            this.player.maxHealth += 20;
            this.player.health = this.player.maxHealth;
            if (this.player.baseMaxHealth) {
                this.player.baseMaxHealth += 20;
            }
            this.addMessage('+20 Max HP!', 'heal');
            break;
        case 'damage':
            this.player.baseDamage += 5;
            this.player.damage += 5;
            this.addMessage('+5 Attack Damage!', 'info');
            break;
        case 'speed':
            this.player.baseSpeed *= 1.1;
            this.player.speed *= 1.1;
            this.addMessage('+10% Movement Speed!', 'info');
            break;
        case 'critChance':
            this.player.critChance += 0.05;
            this.addMessage('+5% Crit Chance!', 'info');
            break;
    }
    
    document.getElementById('levelUpScreen').classList.remove('show');
    this.isPaused = false;
    this.updateUI();
}

update(deltaTime) {
    if (this.isPaused) return;
    
    const dt = deltaTime / 1000;
    
    // Update explored tiles around player
    this.updateExploredTiles();
    
    // Update screen shake
    if (this.screenShake > 0) {
        this.screenShake -= dt * 5;
        if (this.screenShake < 0) this.screenShake = 0;
    }
    
    // Update particles
    for (let i = this.particles.length - 1; i >= 0; i--) {
        if (!this.particles[i].update(dt)) {
            this.particles.splice(i, 1);
        }
    }
    
    // Update damage numbers
    for (let i = this.damageNumbers.length - 1; i >= 0; i--) {
        if (!this.damageNumbers[i].update(dt)) {
            this.damageNumbers.splice(i, 1);
        }
    }
    
    // Update player status effects
    this.updateStatusEffects(this.player, dt);
    
    // Update cooldowns
    if (this.player.attackCooldown > 0) {
        this.player.attackCooldown -= deltaTime;
    }
    
    // Update ability cooldowns
    for (const ability in this.player.abilities) {
        if (this.player.abilities[ability].cooldown > 0) {
            this.player.abilities[ability].cooldown -= deltaTime;
        }
    }
    
    // Update buffs
    for (const buff in this.player.buffs) {
        if (this.player.buffs[buff].active) {
            this.player.buffs[buff].duration -= deltaTime;
            if (this.player.buffs[buff].duration <= 0) {
                this.player.buffs[buff].active = false;
                this.addMessage(`${buff} wore off`, 'info');
            }
        }
    }
    
    // Auto-attack nearest enemy
    if (this.player.attackCooldown <= 0) {
        this.playerAttack();
    }
    
    // Update projectiles
    for (let i = this.projectiles.length - 1; i >= 0; i--) {
        const proj = this.projectiles[i];
        const dx = proj.targetX - proj.x;
        const dy = proj.targetY - proj.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 10 || proj.life <= 0) {
            this.projectiles.splice(i, 1);
        } else {
            const stepX = (dx / distance) * proj.speed * dt;
            const stepY = (dy / distance) * proj.speed * dt;
            const nextX = proj.x + stepX;
            const nextY = proj.y + stepY;
            if (this.isWallAt(nextX, nextY)) {
                this.projectiles.splice(i, 1);
            } else {
                proj.x = nextX;
                proj.y = nextY;
                proj.life -= dt * 2;
            }
        }
    }
    
    // Update enemy projectiles
    for (let i = this.enemyProjectiles.length - 1; i >= 0; i--) {
        const proj = this.enemyProjectiles[i];
        const dx = proj.targetX - proj.x;
        const dy = proj.targetY - proj.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 10 || proj.life <= 0) {
            this.enemyProjectiles.splice(i, 1);
        } else {
            const stepX = (dx / distance) * proj.speed * dt;
            const stepY = (dy / distance) * proj.speed * dt;
            const nextX = proj.x + stepX;
            const nextY = proj.y + stepY;
            if (this.isWallAt(nextX, nextY)) {
                this.enemyProjectiles.splice(i, 1);
                continue;
            }
            proj.x = nextX;
            proj.y = nextY;
            proj.life -= dt * 2;
            
            // Check collision with player (unless invincible)
            if (!this.player.buffs.invincibility.active) {
                const playerDx = this.player.x + this.player.width / 2 - proj.x;
                const playerDy = this.player.y + this.player.height / 2 - proj.y;
                const playerDist = Math.sqrt(playerDx * playerDx + playerDy * playerDy);
                
                if (playerDist < 20 && !proj.hit) {
                    let damage = proj.damage - (this.player.equipment.armor.defense || 0);
                    damage = Math.max(1, damage);
                    
                    // Apply shield
                    if (this.player.buffs.shield.active) {
                        const absorbed = Math.min(damage, this.player.buffs.shield.absorption);
                        this.player.buffs.shield.absorption -= absorbed;
                        damage -= absorbed;
                        
                        if (this.player.buffs.shield.absorption <= 0) {
                            this.player.buffs.shield.active = false;
                            this.addMessage('Shield broken!', 'damage');
                        } else {
                            this.addMessage(`Shield absorbed ${absorbed} damage!`, 'info');
                        }
                    }
                    
                    this.player.health -= damage;
                    proj.hit = true;
                    proj.life = 0;
                    
                    if (damage > 0) {
                        this.addMessage(`${proj.enemyType} hit you for ${damage} damage!`, 'damage');
                        this.playSound('hit');
                    }
                    
                    // Screen shake when hit
                    this.screenShake = 0.5;
                    
                    // Damage number
                    this.damageNumbers.push(new DamageNumber(
                        this.player.x + this.player.width / 2,
                        this.player.y,
                        damage,
                        '#ff0000'
                    ));
                    
                    // Hit particles
                    for (let j = 0; j < 10; j++) {
                        this.particles.push(new Particle(
                            this.player.x + this.player.width / 2,
                            this.player.y + this.player.height / 2,
                            '#ff0000',
                            'circle'
                        ));
                    }
                    
                    if (this.player.health <= 0) {
                        this.gameOver();
                    }
                }
            }
        }
    }
    
    // Player movement
    let dx = 0;
    let dy = 0;
    
    if (this.keys['w'] || this.keys['arrowup']) dy -= 1;
    if (this.keys['s'] || this.keys['arrowdown']) dy += 1;
    if (this.keys['a'] || this.keys['arrowleft']) dx -= 1;
    if (this.keys['d'] || this.keys['arrowright']) dx += 1;
    
    if (dx !== 0 || dy !== 0) {
        const length = Math.sqrt(dx * dx + dy * dy);
        dx /= length;
        dy /= length;
        
        const speedMultiplier = this.player.buffs.speedBoost.active ? this.player.buffs.speedBoost.multiplier : 1;
        const effectiveSpeed = this.player.speed * speedMultiplier;
        
        const newX = this.player.x + dx * effectiveSpeed * dt;
        const newY = this.player.y + dy * effectiveSpeed * dt;
        
        if (this.canMove(newX, this.player.y, this.player.width, this.player.height)) {
            this.player.x = newX;
        }
        if (this.canMove(this.player.x, newY, this.player.width, this.player.height)) {
            this.player.y = newY;
        }
    }
    
    // Check stairs collision
    this.checkStairsCollision();
    
    // Check item collision
    this.checkItemCollision();
    
    // Check loot pickup
    this.checkLootPickup();
    
    // Update enemies
    for (const enemy of this.enemies) {
        this.updateEnemy(enemy, dt);
    }
    
    // Update camera
    this.camera.x = this.player.x - CONFIG.CANVAS_WIDTH / 2 + this.player.width / 2;
    this.camera.y = this.player.y - CONFIG.CANVAS_HEIGHT / 2 + this.player.height / 2;
    
    this.updateUI();
}

updateEnemy(enemy, dt) {
    // Update status effects
    this.updateStatusEffects(enemy, dt);
    
    // Check if stunned
    const isStunned = enemy.statusEffects.some(e => e.type === 'STUN');
    if (isStunned) return;
    
    // Get speed multiplier from status effects
    const speedMult = this.getStatusEffectMultiplier(enemy, 'speedMultiplier');
    
    if (enemy.attackCooldown > 0) {
        enemy.attackCooldown -= dt * 1000;
    }
    
    if (enemy.summonCooldown > 0) {
        enemy.summonCooldown -= dt * 1000;
    }
    
    const dx = this.player.x - enemy.x;
    const dy = this.player.y - enemy.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    // Boss special abilities
    if (enemy.isBoss && enemy.bossType) {
        this.updateBossAbility(enemy, dt, distance);
    }
    
    // Necromancer summon ability
    if (enemy.canSummon && enemy.summonCooldown <= 0 && distance < 400) {
        if (Math.random() < 0.01) { // 1% chance per frame when in range
            this.spawnEnemy(enemy.x + (Math.random() - 0.5) * 100, enemy.y + (Math.random() - 0.5) * 100);
            enemy.summonCooldown = 10000; // 10 second cooldown
            this.addMessage('Necromancer summoned reinforcements!', 'damage');
        }
    }
    
    // AI behavior
    if (distance < 300) {
        enemy.aiState = 'chase';
        
        if (distance < CONFIG.ATTACK_RANGE) {
            // Attack player with projectile
            if (enemy.attackCooldown <= 0) {
                this.createEnemyProjectile(enemy.x, enemy.y, this.player.x, this.player.y, enemy.damage, enemy.type);
                enemy.attackCooldown = CONFIG.ENEMY_ATTACK_COOLDOWN;
            }
        } else {
            // Move toward player
            const moveX = (dx / distance) * enemy.speed * speedMult * dt;
            const moveY = (dy / distance) * enemy.speed * speedMult * dt;
            
            const newX = enemy.x + moveX;
            const newY = enemy.y + moveY;
            
            if (this.canMove(newX, enemy.y, enemy.width, enemy.height)) {
                enemy.x = newX;
            }
            if (this.canMove(enemy.x, newY, enemy.width, enemy.height)) {
                enemy.y = newY;
            }
        }
    } else {
        enemy.aiState = 'idle';
    }
}

updateBossAbility(boss, dt, distanceToPlayer) {
    if (!boss.specialAttackCooldown) boss.specialAttackCooldown = 0;
    if (!boss.teleportCooldown) boss.teleportCooldown = 0;
    
    boss.specialAttackCooldown -= dt * 1000;
    boss.teleportCooldown -= dt * 1000;
    
    switch(boss.bossType.ability) {
        case 'summon_minions':
            if (boss.specialAttackCooldown <= 0) {
                // Summon 2-3 minions
                const numMinions = 2 + Math.floor(Math.random() * 2);
                for (let i = 0; i < numMinions; i++) {
                    this.spawnEnemy(
                        boss.x + (Math.random() - 0.5) * 150,
                        boss.y + (Math.random() - 0.5) * 150
                    );
                }
                this.addMessage(`${boss.bossType.name} summoned minions!`, 'damage');
                boss.specialAttackCooldown = 15000;
            }
            break;
            
        case 'fire_nova':
            if (boss.specialAttackCooldown <= 0 && distanceToPlayer < 250) {
                // Create circular fire projectiles
                for (let i = 0; i < 8; i++) {
                    const angle = (i / 8) * Math.PI * 2;
                    const targetX = boss.x + Math.cos(angle) * 300;
                    const targetY = boss.y + Math.sin(angle) * 300;
                    this.createEnemyProjectile(boss.x, boss.y, targetX, targetY, boss.damage * 0.7, 'Fire Nova');
                }
                this.addMessage(`${boss.bossType.name} unleashed Fire Nova!`, 'damage');
                boss.specialAttackCooldown = 8000;
            }
            break;
            
        case 'freeze_aura':
            if (distanceToPlayer < 200) {
                this.applyStatusEffect(this.player, 'SLOW');
            }
            break;
            
        case 'teleport':
            if (boss.teleportCooldown <= 0 && (distanceToPlayer < 100 || distanceToPlayer > 400)) {
                // Teleport near player
                const angle = Math.random() * Math.PI * 2;
                const teleportDist = 150 + Math.random() * 100;
                const newX = this.player.x + Math.cos(angle) * teleportDist;
                const newY = this.player.y + Math.sin(angle) * teleportDist;
                
                if (this.canMove(newX, newY, boss.width, boss.height)) {
                    // Teleport particles at old position
                    for (let i = 0; i < 20; i++) {
                        this.particles.push(new Particle(
                            boss.x + boss.width / 2,
                            boss.y + boss.height / 2,
                            '#8800ff',
                            'spark'
                        ));
                    }
                    
                    boss.x = newX;
                    boss.y = newY;
                    
                    // Teleport particles at new position
                    for (let i = 0; i < 20; i++) {
                        this.particles.push(new Particle(
                            boss.x + boss.width / 2,
                            boss.y + boss.height / 2,
                            '#8800ff',
                            'spark'
                        ));
                    }
                    
                    boss.teleportCooldown = 7000;
                    this.addMessage(`${boss.bossType.name} teleported!`, 'info');
                }
            }
            break;
            
        case 'raise_dead':
            if (boss.specialAttackCooldown <= 0) {
                // Raise 1-2 skeleton enemies
                const numSkeletons = 1 + Math.floor(Math.random() * 2);
                for (let i = 0; i < numSkeletons; i++) {
                    this.spawnEnemy(
                        boss.x + (Math.random() - 0.5) * 150,
                        boss.y + (Math.random() - 0.5) * 150
                    );
                }
                this.addMessage(`${boss.bossType.name} raised the dead!`, 'damage');
                boss.specialAttackCooldown = 12000;
            }
            break;
    }
}

canMove(x, y, width, height) {
    const left = Math.floor(x / CONFIG.TILE_SIZE);
    const right = Math.floor((x + width) / CONFIG.TILE_SIZE);
    const top = Math.floor(y / CONFIG.TILE_SIZE);
    const bottom = Math.floor((y + height) / CONFIG.TILE_SIZE);
    
    if (left < 0 || right >= CONFIG.DUNGEON_WIDTH || top < 0 || bottom >= CONFIG.DUNGEON_HEIGHT) {
        return false;
    }
    
    return this.dungeon[top][left] !== TILES.WALL &&
           this.dungeon[top][right] !== TILES.WALL &&
           this.dungeon[bottom][left] !== TILES.WALL &&
           this.dungeon[bottom][right] !== TILES.WALL;
}

isWallAt(x, y) {
    const tileX = Math.floor(x / CONFIG.TILE_SIZE);
    const tileY = Math.floor(y / CONFIG.TILE_SIZE);
    if (tileX < 0 || tileX >= CONFIG.DUNGEON_WIDTH || tileY < 0 || tileY >= CONFIG.DUNGEON_HEIGHT) {
        return true;
    }
    return this.dungeon[tileY][tileX] === TILES.WALL;
}

checkStairsCollision() {
    const playerTileX = Math.floor((this.player.x + this.player.width / 2) / CONFIG.TILE_SIZE);
    const playerTileY = Math.floor((this.player.y + this.player.height / 2) / CONFIG.TILE_SIZE);
    
    if (this.dungeon[playerTileY][playerTileX] === TILES.STAIRS) {
        this.currentFloor++;
        
        if (this.currentFloor > this.metaProgress.highestFloor) {
            this.metaProgress.highestFloor = this.currentFloor;
            this.saveGame();
        }
        
        this.addMessage(`Descending to floor ${this.currentFloor}...`, 'info');
        
        // Check for speed run achievement
        const timeTaken = (Date.now() - this.startTime) / 1000 / 60;
        if (this.currentFloor === 5 && timeTaken < 5) {
            this.unlockAchievement('SPEED_RUNNER');
        }
        
        this.generateDungeon();
    }
}

checkItemCollision() {
    for (let i = this.items.length - 1; i >= 0; i--) {
        const item = this.items[i];
        const dx = Math.abs(this.player.x - item.x);
        const dy = Math.abs(this.player.y - item.y);
        
        if (dx < 30 && dy < 30) {
            if (item.type === 'shrine' && !item.used) {
                // Shrine heals player fully
                item.used = true;
                this.player.health = this.player.maxHealth;
                this.addMessage('The shrine heals you completely!', 'heal');
                this.playSound('ability');
                
                // Heal particles
                for (let j = 0; j < 30; j++) {
                    this.particles.push(new Particle(
                        item.x + item.width / 2,
                        item.y + item.height / 2,
                        '#00ff00',
                        'circle'
                    ));
                }
            } else if (item.type === ENTITY_TYPES.CHEST && !item.opened) {
                item.opened = true;
                const gold = (item.treasure ? 50 : 20) + Math.floor(Math.random() * 30) * this.currentFloor;
                this.player.gold += gold;
                this.metaProgress.totalGold += gold;
                
                if (Math.random() < (item.treasure ? 0.8 : 0.5)) {
                    this.player.potions++;
                    this.addMessage(`Found ${gold} gold and a potion!`, 'gold');
                } else {
                    this.addMessage(`Found ${gold} gold!`, 'gold');
                }
                
                // Treasure chests have chance to drop equipment
                if (item.treasure && Math.random() < 0.6) {
                    this.dropLoot(item.x, item.y, false);
                }
                
                this.playSound('pickup');
                this.items.splice(i, 1);
            }
        }
    }
}

checkLootPickup() {
    for (let i = this.lootDrops.length - 1; i >= 0; i--) {
        const loot = this.lootDrops[i];
        const dx = Math.abs(this.player.x - loot.x);
        const dy = Math.abs(this.player.y - loot.y);
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < loot.pickupRadius) {
            this.playSound('pickup');
            
            switch(loot.type) {
                case LOOT_TYPES.HEALTH_POTION:
                    this.player.potions++;
                    this.addMessage('Picked up Health Potion!', 'heal');
                    break;
                case LOOT_TYPES.DAMAGE_BOOST:
                    this.player.buffs.damageBoost.active = true;
                    this.player.buffs.damageBoost.duration = 10000;
                    this.addMessage('Damage Boost! +50% damage for 10s', 'info');
                    break;
                case LOOT_TYPES.SPEED_BOOST:
                    this.player.buffs.speedBoost.active = true;
                    this.player.buffs.speedBoost.duration = 10000;
                    this.addMessage('Speed Boost! +50% speed for 10s', 'info');
                    break;
                case LOOT_TYPES.SHIELD:
                    this.player.buffs.shield.active = true;
                    this.player.buffs.shield.duration = 15000;
                    this.player.buffs.shield.absorption = 50;
                    this.addMessage('Shield! Absorbs 50 damage', 'info');
                    break;
                case LOOT_TYPES.XP_BOOST:
                    this.player.buffs.xpBoost.active = true;
                    this.player.buffs.xpBoost.duration = 30000;
                    this.addMessage('XP Boost! Double XP for 30s', 'gold');
                    break;
                case LOOT_TYPES.INVINCIBILITY:
                    this.player.buffs.invincibility.active = true;
                    this.player.buffs.invincibility.duration = 5000;
                    this.addMessage('Invincibility! 5 seconds', 'gold');
                    break;
                case LOOT_TYPES.WEAPON:
                    this.player.equipment.weapon = loot.equipment;
                    this.updateEquipmentStats();
                    this.addMessage(`Equipped ${loot.equipment.name}!`, 'gold');
                    break;
                case LOOT_TYPES.ARMOR:
                    this.player.equipment.armor = loot.equipment;
                    this.updateEquipmentStats();
                    this.addMessage(`Equipped ${loot.equipment.name}!`, 'gold');
                    break;
                case LOOT_TYPES.ACCESSORY:
                    this.player.equipment.accessory = loot.equipment;
                    this.updateEquipmentStats();
                    this.addMessage(`Equipped ${loot.equipment.name}!`, 'gold');
                    break;
            }
            
            // Pickup particles
            for (let j = 0; j < 10; j++) {
                this.particles.push(new Particle(
                    loot.x, loot.y,
                    this.getLootColor(loot.type),
                    'circle'
                ));
            }
            
            this.lootDrops.splice(i, 1);
        }
    }
}

getLootColor(lootType) {
    switch(lootType) {
        case LOOT_TYPES.HEALTH_POTION: return '#00ff00';
        case LOOT_TYPES.DAMAGE_BOOST: return '#ff0000';
        case LOOT_TYPES.SPEED_BOOST: return '#00ffff';
        case LOOT_TYPES.SHIELD: return '#ffff00';
        case LOOT_TYPES.WEAPON: return '#ff8800';
        case LOOT_TYPES.ARMOR: return '#8888ff';
        case LOOT_TYPES.ACCESSORY: return '#ff44ff';
        case LOOT_TYPES.XP_BOOST: return '#44ffff';
        case LOOT_TYPES.INVINCIBILITY: return '#ffffff';
        default: return '#ffffff';
    }
}

updateExploredTiles() {
    const playerTileX = Math.floor(this.player.x / CONFIG.TILE_SIZE);
    const playerTileY = Math.floor(this.player.y / CONFIG.TILE_SIZE);
    const visionRadius = 8;
    
    for (let dy = -visionRadius; dy <= visionRadius; dy++) {
        for (let dx = -visionRadius; dx <= visionRadius; dx++) {
            const tileX = playerTileX + dx;
            const tileY = playerTileY + dy;
            
            if (tileX >= 0 && tileX < CONFIG.DUNGEON_WIDTH &&
                tileY >= 0 && tileY < CONFIG.DUNGEON_HEIGHT) {
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance <= visionRadius) {
                    this.exploredTiles[tileY][tileX] = true;
                }
            }
        }
    }
}

render() {
    this.ctx.fillStyle = '#000';
    this.ctx.fillRect(0, 0, CONFIG.CANVAS_WIDTH, CONFIG.CANVAS_HEIGHT);
    
    // Apply screen shake
    this.ctx.save();
    if (this.screenShake > 0) {
        const shakeX = (Math.random() - 0.5) * this.screenShake * 10;
        const shakeY = (Math.random() - 0.5) * this.screenShake * 10;
        this.ctx.translate(shakeX, shakeY);
    }
    
    // Render dungeon
    for (let y = 0; y < CONFIG.DUNGEON_HEIGHT; y++) {
        for (let x = 0; x < CONFIG.DUNGEON_WIDTH; x++) {
            const screenX = x * CONFIG.TILE_SIZE - this.camera.x;
            const screenY = y * CONFIG.TILE_SIZE - this.camera.y;
            
            if (screenX < -CONFIG.TILE_SIZE || screenX > CONFIG.CANVAS_WIDTH ||
                screenY < -CONFIG.TILE_SIZE || screenY > CONFIG.CANVAS_HEIGHT) {
                continue;
            }
            
            const tile = this.dungeon[y][x];
            
            if (tile === TILES.WALL) {
                this.ctx.fillStyle = '#555';
                this.ctx.fillRect(screenX, screenY, CONFIG.TILE_SIZE, CONFIG.TILE_SIZE);
                this.ctx.strokeStyle = '#333';
                this.ctx.strokeRect(screenX, screenY, CONFIG.TILE_SIZE, CONFIG.TILE_SIZE);
            } else if (tile === TILES.FLOOR) {
                this.ctx.fillStyle = '#222';
                this.ctx.fillRect(screenX, screenY, CONFIG.TILE_SIZE, CONFIG.TILE_SIZE);
            } else if (tile === TILES.STAIRS) {
                this.ctx.fillStyle = '#222';
                this.ctx.fillRect(screenX, screenY, CONFIG.TILE_SIZE, CONFIG.TILE_SIZE);
                this.ctx.fillStyle = '#ffff00';
                this.ctx.fillRect(screenX + 8, screenY + 8, 16, 16);
            }
        }
    }
    
    // Render player projectiles
    for (const proj of this.projectiles) {
        const screenX = proj.x - this.camera.x;
        const screenY = proj.y - this.camera.y;
        
        this.ctx.fillStyle = `rgba(255, 255, 0, ${proj.life})`;
        this.ctx.beginPath();
        this.ctx.arc(screenX, screenY, 6, 0, Math.PI * 2);
        this.ctx.fill();
        
        // Glow effect
        this.ctx.fillStyle = `rgba(255, 200, 0, ${proj.life * 0.3})`;
        this.ctx.beginPath();
        this.ctx.arc(screenX, screenY, 12, 0, Math.PI * 2);
        this.ctx.fill();
    }
    
    // Render enemy projectiles
    for (const proj of this.enemyProjectiles) {
        const screenX = proj.x - this.camera.x;
        const screenY = proj.y - this.camera.y;
        
        this.ctx.fillStyle = `rgba(255, 50, 50, ${proj.life})`;
        this.ctx.beginPath();
        this.ctx.arc(screenX, screenY, 7, 0, Math.PI * 2);
        this.ctx.fill();
        
        // Glow effect
        this.ctx.fillStyle = `rgba(255, 100, 100, ${proj.life * 0.3})`;
        this.ctx.beginPath();
        this.ctx.arc(screenX, screenY, 14, 0, Math.PI * 2);
        this.ctx.fill();
    }
    
    // Render items
    for (const item of this.items) {
        const screenX = item.x - this.camera.x;
        const screenY = item.y - this.camera.y;
        
        if (item.type === 'shrine' && !item.used) {
            // Draw shrine
            const pulse = Math.sin(Date.now() / 300) * 0.3 + 0.7;
            this.ctx.save();
            this.ctx.globalAlpha = pulse;
            this.ctx.fillStyle = '#00ff88';
            this.ctx.fillRect(screenX, screenY, item.width, item.height);
            this.ctx.shadowBlur = 20;
            this.ctx.shadowColor = '#00ff88';
            this.ctx.strokeStyle = '#00ffaa';
            this.ctx.lineWidth = 3;
            this.ctx.strokeRect(screenX, screenY, item.width, item.height);
            this.ctx.restore();
        } else if (item.type === ENTITY_TYPES.CHEST && !item.opened) {
            this.ctx.fillStyle = item.treasure ? '#ffd700' : '#8b4513';
            this.ctx.fillRect(screenX, screenY, item.width, item.height);
            this.ctx.strokeStyle = item.treasure ? '#ffaa00' : '#654321';
            this.ctx.lineWidth = 2;
            this.ctx.strokeRect(screenX, screenY, item.width, item.height);
            
            // Lock decoration
            this.ctx.fillStyle = '#ffd700';
            this.ctx.fillRect(screenX + 8, screenY + 8, 8, 8);
        }
    }
    
    // Render loot drops
    for (const loot of this.lootDrops) {
        const screenX = loot.x - this.camera.x;
        const screenY = loot.y - this.camera.y;
        
        // Pulsing effect
        const pulse = Math.sin(Date.now() / 200) * 0.2 + 0.8;
        this.ctx.save();
        this.ctx.globalAlpha = pulse;
        
        const color = this.getLootColor(loot.type);
        this.ctx.shadowBlur = 10;
        this.ctx.shadowColor = color;
        this.ctx.fillStyle = color;
        this.ctx.fillRect(screenX, screenY, loot.width, loot.height);
        this.ctx.shadowBlur = 0;
        
        this.ctx.restore();
    }
    
    // Render enemies
    for (const enemy of this.enemies) {
        const screenX = enemy.x - this.camera.x;
        const screenY = enemy.y - this.camera.y;
        
        // Special boss rendering
        if (enemy.isBoss) {
            // Boss aura
            const auraSize = enemy.width + Math.sin(Date.now() / 300) * 10;
            this.ctx.shadowBlur = 20;
            this.ctx.shadowColor = enemy.color;
            this.ctx.strokeStyle = enemy.color;
            this.ctx.lineWidth = 3;
            this.ctx.strokeRect(
                screenX - (auraSize - enemy.width) / 2,
                screenY - (auraSize - enemy.height) / 2,
                auraSize,
                auraSize
            );
        }
        
        // Enemy body with glow effect
        this.ctx.shadowBlur = enemy.isBoss ? 20 : 10;
        this.ctx.shadowColor = enemy.color;
        this.ctx.fillStyle = enemy.color;
        this.ctx.fillRect(screenX, screenY, enemy.width, enemy.height);
        this.ctx.shadowBlur = 0;
        
        // Boss crown
        if (enemy.isBoss) {
            this.ctx.fillStyle = '#ffd700';
            this.ctx.fillRect(screenX + enemy.width / 2 - 8, screenY - 8, 16, 8);
            this.ctx.fillRect(screenX + enemy.width / 2 - 4, screenY - 12, 8, 4);
        }
        
        // Status effect indicators
        if (enemy.statusEffects.length > 0) {
            for (let i = 0; i < enemy.statusEffects.length; i++) {
                const effect = enemy.statusEffects[i];
                this.ctx.fillStyle = effect.color;
                this.ctx.fillRect(screenX + i * 6, screenY - 15, 5, 5);
            }
        }
        
        // Health bar
        const healthPercent = enemy.health / enemy.maxHealth;
        this.ctx.fillStyle = '#ff0000';
        this.ctx.fillRect(screenX, screenY - 8, enemy.width, 4);
        this.ctx.fillStyle = '#00ff00';
        this.ctx.fillRect(screenX, screenY - 8, enemy.width * healthPercent, 4);
    }
    
    // Render player
    const playerScreenX = this.player.x - this.camera.x;
    const playerScreenY = this.player.y - this.camera.y;
    
    // Invincibility effect
    if (this.player.buffs.invincibility.active) {
        const flash = Math.sin(Date.now() / 100) > 0;
        if (!flash) {
            this.ctx.globalAlpha = 0.5;
        }
    }
    
    // Player glow when attacking
    if (this.player.isAttacking) {
        this.ctx.shadowBlur = 15;
        this.ctx.shadowColor = '#ffff00';
    }
    
    this.ctx.fillStyle = this.player.isAttacking ? '#ffff00' : this.player.classColor;
    this.ctx.fillRect(playerScreenX, playerScreenY, this.player.width, this.player.height);
    this.ctx.shadowBlur = 0;
    this.ctx.globalAlpha = 1;
    
    // Status effect indicators on player
    if (this.player.statusEffects.length > 0) {
        for (let i = 0; i < this.player.statusEffects.length; i++) {
            const effect = this.player.statusEffects[i];
            this.ctx.fillStyle = effect.color;
            this.ctx.fillRect(playerScreenX + i * 6, playerScreenY - 15, 5, 5);
        }
    }
    
    // Attack line to target
    if (this.player.isAttacking && this.player.attackTarget) {
        const targetScreenX = this.player.attackTarget.x - this.camera.x;
        const targetScreenY = this.player.attackTarget.y - this.camera.y;
        
        this.ctx.strokeStyle = 'rgba(255, 255, 0, 0.5)';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.moveTo(playerScreenX + this.player.width / 2, playerScreenY + this.player.height / 2);
        this.ctx.lineTo(targetScreenX + this.player.attackTarget.width / 2, 
                       targetScreenY + this.player.attackTarget.height / 2);
        this.ctx.stroke();
    }
    
    // Auto-attack range indicator (subtle)
    this.ctx.strokeStyle = 'rgba(100, 100, 255, 0.2)';
    this.ctx.lineWidth = 1;
    this.ctx.beginPath();
    this.ctx.arc(playerScreenX + this.player.width / 2, 
                playerScreenY + this.player.height / 2, 
                CONFIG.AUTO_ATTACK_RANGE, 0, Math.PI * 2);
    this.ctx.stroke();
    
    // Render particles
    for (const particle of this.particles) {
        particle.render(this.ctx, this.camera);
    }
    
    // Render damage numbers
    for (const dmg of this.damageNumbers) {
        dmg.render(this.ctx, this.camera);
    }
    
    // Restore screen shake
    this.ctx.restore();
    
    // Render minimap
    this.renderMinimap();
}

renderMinimap() {
    if (!this.minimapCanvas || !this.minimapCtx) {
        return;
    }
    this.minimapCtx.fillStyle = '#1a1a1a';
    this.minimapCtx.fillRect(0, 0, this.minimapCanvas.width, this.minimapCanvas.height);
    const minimapTileSize = this.minimapScale;
    const dungeonPixelWidth = CONFIG.DUNGEON_WIDTH * minimapTileSize;
    const dungeonPixelHeight = CONFIG.DUNGEON_HEIGHT * minimapTileSize;
    const offsetX = (this.minimapCanvas.width - dungeonPixelWidth) / 2;
    const offsetY = (this.minimapCanvas.height - dungeonPixelHeight) / 2;
    for (let y = 0; y < CONFIG.DUNGEON_HEIGHT; y++) {
        for (let x = 0; x < CONFIG.DUNGEON_WIDTH; x++) {
            if (!this.exploredTiles[y][x]) continue;
            const tile = this.dungeon[y][x];
            const mapX = offsetX + x * minimapTileSize;
            const mapY = offsetY + y * minimapTileSize;
            if (tile === TILES.FLOOR) {
                this.minimapCtx.fillStyle = '#333';
                this.minimapCtx.fillRect(mapX, mapY, minimapTileSize, minimapTileSize);
            } else if (tile === TILES.WALL) {
                this.minimapCtx.fillStyle = '#666';
                this.minimapCtx.fillRect(mapX, mapY, minimapTileSize, minimapTileSize);
            } else if (tile === TILES.STAIRS) {
                this.minimapCtx.fillStyle = '#ffff00';
                this.minimapCtx.fillRect(mapX, mapY, minimapTileSize, minimapTileSize);
            }
        }
    }
    for (const item of this.items) {
        if (!item.opened && item.type === ENTITY_TYPES.CHEST) {
            const tileX = Math.floor(item.x / CONFIG.TILE_SIZE);
            const tileY = Math.floor(item.y / CONFIG.TILE_SIZE);
            if (this.exploredTiles[tileY][tileX]) {
                const mapX = offsetX + tileX * minimapTileSize;
                const mapY = offsetY + tileY * minimapTileSize;
                this.minimapCtx.fillStyle = '#ffd700';
                this.minimapCtx.fillRect(mapX, mapY, minimapTileSize, minimapTileSize);
            }
        }
    }
    for (const enemy of this.enemies) {
        const tileX = Math.floor(enemy.x / CONFIG.TILE_SIZE);
        const tileY = Math.floor(enemy.y / CONFIG.TILE_SIZE);
        if (this.exploredTiles[tileY][tileX]) {
            const mapX = offsetX + tileX * minimapTileSize;
            const mapY = offsetY + tileY * minimapTileSize;
            this.minimapCtx.fillStyle = enemy.isBoss ? '#ff00ff' : '#ff0000';
            this.minimapCtx.fillRect(mapX, mapY, minimapTileSize, minimapTileSize);
        }
    }
    const playerTileX = Math.floor(this.player.x / CONFIG.TILE_SIZE);
    const playerTileY = Math.floor(this.player.y / CONFIG.TILE_SIZE);
    const playerMapX = offsetX + playerTileX * minimapTileSize;
    const playerMapY = offsetY + playerTileY * minimapTileSize;
    this.minimapCtx.fillStyle = this.player.classColor;
    this.minimapCtx.fillRect(playerMapX, playerMapY, minimapTileSize, minimapTileSize);
    this.minimapCtx.strokeStyle = 'rgba(0, 102, 255, 0.3)';
    this.minimapCtx.lineWidth = 1;
    this.minimapCtx.beginPath();
    this.minimapCtx.arc(
        playerMapX + minimapTileSize / 2,
        playerMapY + minimapTileSize / 2,
        8 * minimapTileSize,
        0,
        Math.PI * 2
    );
    this.minimapCtx.stroke();
    this.minimapCtx.strokeStyle = '#444';
    this.minimapCtx.lineWidth = 2;
    this.minimapCtx.strokeRect(0, 0, this.minimapCanvas.width, this.minimapCanvas.height);
}

updateUI() {
    const healthPercent = (this.player.health / this.player.maxHealth) * 100;
    document.getElementById('playerHealth').style.width = healthPercent + '%';
    document.getElementById('healthText').textContent = `${Math.max(0, Math.floor(this.player.health))}/${this.player.maxHealth}`;
    document.getElementById('playerLevel').textContent = this.player.level;
    document.getElementById('playerXP').textContent = this.player.xp;
    document.getElementById('playerGold').textContent = this.player.gold;
    document.getElementById('dungeonFloor').textContent = this.currentFloor;
    document.getElementById('potionCount').textContent = this.player.potions;
    document.getElementById('weaponName').textContent = this.player.equipment.weapon.name;
    document.getElementById('armorName').textContent = this.player.equipment.armor.name;
    const accessoryElement = document.getElementById('accessoryName');
    if (accessoryElement) {
        accessoryElement.textContent = this.player.equipment.accessory ? this.player.equipment.accessory.name : 'None';
    }
    const dashPercent = Math.max(0, (this.player.abilities.dash.cooldown / this.player.abilities.dash.maxCooldown) * 100);
    const areaPercent = Math.max(0, (this.player.abilities.areaAttack.cooldown / this.player.abilities.areaAttack.maxCooldown) * 100);
    const healPercent = Math.max(0, (this.player.abilities.heal.cooldown / this.player.abilities.heal.maxCooldown) * 100);
    document.getElementById('dashCooldown').style.height = dashPercent + '%';
    document.getElementById('areaCooldown').style.height = areaPercent + '%';
    document.getElementById('healCooldown').style.height = healPercent + '%';
}

addMessage(text, type = '') {
    const messageLog = document.getElementById('messageLog');
    const message = document.createElement('div');
    message.className = `message ${type}`;
    message.textContent = text;
    messageLog.appendChild(message);
    messageLog.scrollTop = messageLog.scrollHeight;
    while (messageLog.children.length > 20) {
        messageLog.removeChild(messageLog.firstChild);
    }
}

gameOver() {
    this.isPaused = true;
    this.metaProgress.gamesPlayed++;
    this.saveGame();
    document.getElementById('finalFloor').textContent = this.currentFloor;
    document.getElementById('finalKills').textContent = this.player.kills;
    document.getElementById('gameOverScreen').classList.add('show');
}

gameLoop(currentTime = 0) {
    const deltaTime = currentTime - this.lastTime;
    this.lastTime = currentTime;
    if (deltaTime < 100) {
        this.update(deltaTime);
    }
    this.render();
    requestAnimationFrame((time) => this.gameLoop(time));
}

}

// Start game when page loads
window.addEventListener('load', () => {
    window.game = new Game();
});
