// PASTE THIS AT THE END OF YOUR game.js FILE (before the window.load event)

// Override the updateEnemy method
Game.prototype.updateEnemy = function(enemy, dt) {
    if (typeof updateEnemyEnhanced !== 'undefined') {
        updateEnemyEnhanced(this, enemy, dt);
    } else {
        // Fallback to original if enhanced not loaded
        console.warn('Enhanced AI not loaded, using basic AI');
    }
};

// Override the spawnEnemy method
const originalSpawnEnemy = Game.prototype.spawnEnemy;
Game.prototype.spawnEnemy = function(x, y) {
    if (typeof spawnEnemyEnhanced !== 'undefined') {
        return spawnEnemyEnhanced(this, x, y);
    } else {
        // Fallback to original
        return originalSpawnEnemy.call(this, x, y);
    }
};

// Add CONFIG reference to enhanced AI
if (typeof window !== 'undefined') {
    window.CONFIG = CONFIG;
}

// Add Particle class reference
if (typeof Game !== 'undefined') {
    Game.prototype.Particle = Particle;
}

console.log('Enhanced AI integration complete!');
