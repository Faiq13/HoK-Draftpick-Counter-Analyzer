import assert from 'node:assert/strict';
import heroes from '../heroes.json' with { type: 'json' };
import matchups from '../src/data/counters.json' with { type: 'json' };

const heroByName = new Map(heroes.map(hero => [hero.chinese_hero_name, hero]));
const enemyNames = ['Dun', 'Flowborn (Mage)', 'Lady Zhen'];
const sharedCounter = matchups
  .filter(row => enemyNames.includes(row.heroName))
  .reduce((counts, row) => counts.set(row.counteredByName, (counts.get(row.counteredByName) ?? 0) + 1), new Map());

assert.equal(enemyNames.every(name => heroByName.has(name)), true);
assert.equal(sharedCounter.get('Han Xin'), 3);
assert.equal(matchups.every(row => heroByName.has(row.heroName) && heroByName.has(row.counteredByName)), true);
console.log('local counter data integrity passed');
