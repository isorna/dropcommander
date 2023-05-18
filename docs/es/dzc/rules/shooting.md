---
title: 'Shooting'
excerpt: 'To shoot at an enemy, the process is as simple as going through the weapon profile one statistic at a time.'
position: 7
---

# {{ $frontmatter.title }}

To shoot at an enemy, the process is as simple as going through the weapon profile one statistic at a time.

## Weapons

Most units are equipped with weapons capable of delivering death and destruction to the enemy. The offensive capabilities of a unit (if it has any) are represented by its weapons profile, an example of which is shown below.

<table>
  <thead>
    <tr>
      <th>Weapon</th>
      <th>M&amp;F</th>
      <th>Arc</th>
      <th>R(F)</th>
      <th>R(C)</th>
      <th>Shots</th>
      <th>Acc</th>
      <th>E</th>
      <th>Special</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Avenger Railgun</td>
      <td>4&quot;</td>
      <td>F/S/R</td>
      <td>∞</td>
      <td>24&quot;</td>
      <td>1</td>
      <td>2+</td>
      <td>10</td>
      <td>Articulated</td>
    </tr>
    <tr>
      <td>Equalizer Machinegun</td>
      <td>4&quot;</td>
      <td>F/S</td>
      <td>24&quot;</td>
      <td>12&quot;</td>
      <td>2</td>
      <td>3+</td>
      <td>3</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

**Move and Fire - M&F** - The maximum distance the unit may move and still fire the weapon. A dash here shows that the unit may move its full distance and still fire the weapon. If a unit shoots before moving, it cannot then move further than the M&F value.

**Arc of Fire - Arc** - Describes the angles at which the weapon can fire relative to the model’s central axis.

**Full Range - R(F)** - Represents the maximum effective range of the weapon. Weapons with a range value represented by a ∞ symbol have essentially an infinite range within the confines of the game table. Weapons with a range value of CQ are called Close Quarters weapons and require the attacking unit to be in the same Garrison as the target.

**Countered Range - R(C)** - Represents the effective range of the weapon against targets which employ Active countermeasures.

**Shots (S)** - The number of shots a weapon has. Note that this purely simulates the extra killing power of rapid fire weapons and does not always represent how many actual rounds are fired (a machine gun might fire dozens of bullets a second but won’t get dozens of shots).

**Accuracy (Acc)** - Represents the accuracy of the weapon. This is the dice roll value required when rolling to hit (lower target numbers are better). Weapons with a dash or a value of 0 automatically hit.

**Energy (E)** - Represents the destructive power of the weapon.

**Special** - Any special rules which apply to the weapon. Any special rules which are not outlined in the "Special Rules" section of the rulebook will be described below the unit’s weapon profile.

## Check Movement

If a unit moves over the weapon s Move & Fire value, it cannot be used during the same activation. Equally, if a weapon is used, a unit cannot then move further than its M&F value.

M&F is judged on a unit to unit basis, which means some units in a squad can move further than their M&F value and can t shoot while others that didn t move further than their M&F value may still shoot.

## Check Weapon Arcs & Line of Sight

A target must be within a weapon s Arc value, as well as within line of sight. Units in a Garrison have line of sight to every other unit in that Garrison.

If a unit can see less than half of the target unit, they count as **Hull Down and that weapon suffers a +2 penalty to its Accuracy**. It s easiest to roll different coloured dice to represent shots that are and aren t Hull Down.

A weapon s arc of fire is represented by its Arc value. This will be expressed using the letters: F (front), S (side), and R (rear). For example, a weapon with an arc value of F/S may shoot at targets in front of and at the side of the model, whereas a weapon with an arc value of F/S/R has 360º arc of fire. Side arcs may be further dileneated by Left or Right facings.

Individual arcs are measured at 90 degree angles, with the front arc directly at the front of the miniature. Most miniatures will have easy arcs to measure, but some larger ones may be more complex. In these situations, you can align the arcs on the blast marker with the central axis of the shooting model.

The centre of an enemy model s main body or base must be within the weapon s arcs to be considered a legitimate target for that unit.

## Measure Range Roll to Hit

_Some units may have Active Countermeasures. These can detect and destroy or deflect incoming projectiles before they hit their target, either by using a localized energy field, small directed energy beams, or physical munitions. Their effectiveness depends on the speed and point of origin of the incoming projectile, and as such they are less effective against high speed projectiles or shots from close range. They are also totally useless against directed energy weapons (such as lasers)_.

When targeting a unit with Active Countermeasures (shown in their stat sheet), a weapon must use its **R(C) value**. If a unit **doesn t** have Active Countermeasures, it uses the **R(F) value**. A target must be within this range. If it is not, is cannot be shot. A target in physical contact with the shooting unit always counts as in range for all of its weapons.

## Allocate Shots

Each unit in a squad may fire any or all of the weapons on its stat sheet, unless using Close Quarters weapons - see page 17 for details.

When allocating shots, a player **must declare targets for the entire squad before rolling any dice**. Pick an **enemy unit** to shoot at with each weapon for each unit. Separate weapons may fire at different units, (even other squads) but a weapon with multiple shots must use all of them against a single unit (see diagram opposite for an example).

It s easiest and quickest to combine shots together into a single roll, often using coloured dice to show which is which. When rolling dice, effects are resolved simultaneously for the entire shooting squad.

Roll a number of dice equal to the total number of Shots. The Accuracy value on the weapon is what those dice need to roll **equal to or over** in order to hit the target. Anything under the target number misses to no further effect. **Weapons with a dash automatically hit,** but weapons with an Accuracy of 0 roll as normal.

Modifiers (such as being Hull Down) are applied before rolling. **A weapon always hits on a roll of a 6, regardless of modifiers**.

A squad that is **out of coherency** suffers a **+1 penalty to its Accuracy**.

A squad that has **disembarked** during that activation suffers a **+2 penalty to its Accuracy** (see Transports for details).

## Evasion Countermeasures

**Evasion Countermeasures** are employed before rolling to hit. A target s Evasion Countermeasures have a number next to them, which modifies the result needed.

_For example a unit that is out of coherency shoots a weapon with 3+ Accuracy. The target has E+2 Countermeasures_.

_Being out of coherency adds a +1 penalty, making it a 4+ to hit. The target s Evasion Countermeasures confer an additional +2 penalty, so it requires a 6+ to hit_.

## Roll to Damage

The next stage is to determine if any damage is inflicted. **Roll 1 dice** for each successful hit and **add the weapon s Energy value**. If the result **equals or beats the target s Armour**, then 1 Damage is inflicted.

If the result beats the target s Armour by **2 or more,** the damage roll is a **Critical and inflicts 2 Damage**. **If the dice result is a 1, the weapon doesn t do any damage,** regardless of whether it would otherwise equal or beat the Armour.

Note that low-energy weapons cannot damage well armoured targets (which make hardened targets like tanks immune to small arms fire). Also note that damage is never a foregone conclusion; an immensely powerful shot might simply graze a target or pass through non- essential systems, leaving it mostly intact.

## Passive Countermeasures

Some units carry high tech energy shields, protecting them from all but the most deadly shots.

A target with **Passive Countermeasures** may now attempt to block the damage. The controlling player rolls 1 dice for each Damage, after modifiers like Criticals and the Devastator special rule (see Weapon Special Rules for more details).

Passive Countermeasures have a number next to them. For every roll **equal to or higher** than that number, one Damage is discarded. **Passive Countermeasures may not be used against weapons with Energy 13 or higher**.

## Resolve Damage

Every point of Damage inflicted is resolved against a single unit, causing them to lose 1 Damage Point each.

Any damage points inflicted on a unit should be recorded or indicated next to the model in some way (by using counters or small dice for example). This damage remains for the rest of the game.

If a unit drops to zero Damage Points then it is destroyed. If any special rules relate to its destruction (such as for Transports containing other units) then they should be acted on now. Otherwise the unit is removed from the table.

A unit cannot go below zero Damage Points. If there is more damage to resolve after a unit is destroyed, it is simply discarded.

_In this example, we see three Sabres making a Shooting action. Each of the Sabres targets a different Hunter with their UM-100 "Avenger"Railguns. However, their UM-50 "Equalizer" Machineguns are only Energy 3, which means they cannot hurt the Hunters's Armour 13. So instead they target the Scourge Warrior units_.
