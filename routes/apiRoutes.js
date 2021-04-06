/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the UMD Dining API!');
});

/// /////////////////////////////////
/// ////Countries Endpoints////////
/// /////////////////////////////////
router.get('/countries', async (req, res) => {
  try {
    const side = await db.Countries.findAll();
    const reply = side.length > 0 ? { data: side } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/countries/:side_id', async (req, res) => {
  try {
    const side = await db.Countries.findAll({
      where: {
        side_id: req.params.side_id
      }
    });

    res.json(side);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.post('/countries', async (req, res) => {
  const side = await db.Countries.findAll();
  const currentId = (await side.length) + 1;
  try {
    const newCountries = await db.Countries.create({
      side_id: currentId,
      country_name: req.body.country_name
    });
    res.json(newCountries);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.delete('/countries/:side_id', async (req, res) => {
  try {
    await db.Countries.destroy({
      where: {
        side_id: req.params.side_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/countries', async (req, res) => {
  try {
    await db.Countries.update(
      {
        country_name: req.body.hall_name
      },
      {
        where: {
          side_id: req.body.side_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// ////////Country Side Endpoints//////////
/// /////////////////////////////////
router.get('/CountrySide', async (req, res) => {
  try {
    const side = await db.CountrySides.findAll();
    const reply = side.length > 0 ? { data: side } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/CountrySide/:side_id', async (req, res) => {
  try {
    const side = await db.CountrySide.findAll({
      where: {
        side_id: req.params.side_id
      }
    });

    res.json(side);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.post('/CountrySide', async (req, res) => {
  const side = await db.countries.findAll();
  const currentId = (await side.length) + 1;
  try {
    const newCountrySide = await db.CountrySide.create({
      side_id: currentId,
      country_id: req.body.country_id
    });
    res.json(newCountries);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.delete('/CountrySide/:side_id', async (req, res) => {
  try {
    await db.CountrySide.destroy({
      where: {
        side_id: req.params.side_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/CountrySide', async (req, res) => {
  try {
    await db.CountrySide.update(
      {
        country_id: req.body.country_id
      },
      {
        where: {
          side_id: req.body.side_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// ////////Locations Endpoints/////////
/// /////////////////////////////////
router.get('/locations', async (req, res) => {
  try {
    const location = await db.Locations.findAll();
    const reply = location.length > 0 ? { data: location } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/locations/:location_id', async (req, res) => {
  try {
    const location = await db.Locations.findAll({
      where: {
        location_id: req.params.location_id
      }
    });

    res.json(location);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.post('/locations', async (req, res) => {
  const location = await db.Locations.findAll();
  const currentId = (await location.length) + 1;
  try {
    const newLocations = await db.Locations.create({
      location_id: currentId,
      location_name: req.body.country_name
    });
    res.json(newLocations);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.delete('/locations/:location_id', async (req, res) => {
  try {
    await db.Locations.destroy({
      where: {
        location_id: req.params.location_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/locations', async (req, res) => {
  try {
    await db.Locations.update(
      {
        location_name: req.body.location_name
      },
      {
        where: {
          location_id: req.body.location_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// Outcomes Endpoints///
/// /////////////////////////////////
router.get('/outcomes', async (req, res) => {
  try {
    const halls = await db.Outcomes.findAll();
    const reply = halls.length > 0 ? { data: halls } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/outcomes/:outcome_id', async (req, res) => {
  try {
    const side = await db.Outcomes.findAll({
      where: {
        outcome_id: req.params.outcome_id
      }
    });

    res.json(side);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.post('/outcomes', async (req, res) => {
  const side = await db.Outcomes.findAll();
  const currentId = (await side.length) + 1;
  try {
    const newOutcomes = await db.Outcomes.create({
      outcome_id: currentId,
      outcome_name: req.body.outcome_name
    });
    res.json(newOutcomes);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.delete('/outcomes/:outcome_id', async (req, res) => {
  try {
    await db.Outcomes.destroy({
      where: {
        outcome_id: req.params.outcome_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/outcomes', async (req, res) => {
  try {
    await db.Outcomes.update(
      {
        outcome_name: req.body.outcome_name
      },
      {
        where: {
          outcome_id: req.body.outcome_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// Participants Endpoints///
/// /////////////////////////////////
router.get('/participants', async (req, res) => {
  try {
    const halls = await db.Participants.findAll();
    const reply = halls.length > 0 ? { data: halls } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/participants/:war_id', async (req, res) => {
  try {
    const side = await db.Participants.findAll({
      where: {
        war_id: req.params.war_id
      }
    });

    res.json(side);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.post('/participants', async (req, res) => {
  const side = await db.Participants.findAll();
  const currentId = (await side.length) + 1;
  try {
    const newParticipants = await db.Participants.create({
      war_id: currentId,
      country_id: req.body.country_id,
      initiator: req.body.initiator
    });
    res.json(newParticipants);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.delete('/participants/:war_id', async (req, res) => {
  try {
    await db.Participants.destroy({
      where: {
        war_id: req.params.war_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/participants', async (req, res) => {
  try {
    await db.Participants.update(
      {
        country_id: req.body.country_id,
        initiator: req.body.initiator
      },
      {
        where: {
          war_id: req.body.war_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// Sides Endpoints///
/// /////////////////////////////////
router.get('/sides', async (req, res) => {
  try {
    const halls = await db.Sides.findAll();
    const reply = halls.length > 0 ? { data: halls } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/sides/:side_id', async (req, res) => {
  try {
    const side = await db.Sides.findAll({
      where: {
        side_id: req.params.side_id
      }
    });

    res.json(side);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.post('/sides', async (req, res) => {
  const side = await db.Sides.findAll();
  const currentId = (await side.length) + 1;
  try {
    const newSides = await db.Sides.create({
      side_id: currentId,
      side_name: req.body.side_name
    });
    res.json(newSides);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.delete('/sides/:side_id', async (req, res) => {
  try {
    await db.Sides.destroy({
      where: {
        side_id: req.params.side_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/sides', async (req, res) => {
  try {
    await db.Sides.update(
      {
        side_name: req.body.side_name
      },
      {
        where: {
          side_id: req.body.side_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// War Outcomes Endpoints///
/// /////////////////////////////////
router.get('/WarOutcomes', async (req, res) => {
  try {
    const halls = await db.WarOutcomes.findAll();
    const reply = halls.length > 0 ? { data: halls } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/WarOutcomes/:side_id', async (req, res) => {
  try {
    const side = await db.outcomes.findAll({
      where: {
        side_id: req.params.side_id
      }
    });

    res.json(side);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.post('/WarOutcomes', async (req, res) => {
  const side = await db.WarOutcomes.findAll();
  const currentId = (await side.length) + 1;
  try {
    const newWarOutcomes = await db.WarOutcomes.create({
      side_id: currentId,
      outcome_id: req.body.outcome_id
    });
    res.json(newWarOutcomes);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.delete('/WarOutcomes/:side_id', async (req, res) => {
  try {
    await db.WarOutcomes.destroy({
      where: {
        side_id: req.params.side_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/WarOutcomes', async (req, res) => {
  try {
    await db.WarOutcomes.update(
      {
        outcome_id: req.body.outcome_id
      },
      {
        where: {
          side_id: req.body.side_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// War Sides Endpoints///
/// /////////////////////////////////
router.get('/WarSides', async (req, res) => {
  try {
    const halls = await db.WarSides.findAll();
    const reply = halls.length > 0 ? { data: halls } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/WarSides/:war_id', async (req, res) => {
  try {
    const side = await db.WarSides.findAll({
      where: {
        war_id: req.params.war_id
      }
    });

    res.json(side);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.post('/WarSides', async (req, res) => {
  const side = await db.WarSides.findAll();
  const currentId = (await side.length) + 1;
  try {
    const newWarSides = await db.WarSides.create({
      war_id: currentId,
      side_id: req.body.side_id
    });
    res.json(newWarSides);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.delete('/WarSides/:war_id', async (req, res) => {
  try {
    await db.WarSides.destroy({
      where: {
        war_id: req.params.war_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/WarSides', async (req, res) => {
  try {
    await db.WarSides.update(
      {
        side_id: req.body.side_id
      },
      {
        where: {
          war_id: req.body.war_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// Wars Endpoints///
/// /////////////////////////////////
router.get('/wars', async (req, res) => {
  try {
    const halls = await db.Wars.findAll();
    const reply = halls.length > 0 ? { data: halls } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/wars/:war_id', async (req, res) => {
  try {
    const side = await db.Wars.findAll({
      where: {
        war_id: req.params.war_id
      }
    });

    res.json(side);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.post('/wars', async (req, res) => {
  const side = await db.Wars.findAll();
  const currentId = (await side.length) + 1;
  try {
    const newWars = await db.Wars.create({
      war_id: currentId,
      war_name: req.body.war_name,
      start_date: req.body.start_date,
      end_date: req.body.end_name,
      battle_deaths: req.body.battle_deaths
    });
    res.json(newWars);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.delete('/wars/:war_id', async (req, res) => {
  try {
    await db.Wars.destroy({
      where: {
        war_id: req.params.war_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/wars', async (req, res) => {
  try {
    await db.Wars.update(
      {
        war_name: req.body.war_name,
        start_date: req.body.start_date,
        end_date: req.body.end_name,
        battle_deaths: req.body.battle_deaths
      },
      {
        where: {
          war_id: req.body.war_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// Where Fought Endpoints///
/// /////////////////////////////////
router.get('/WhereFought', async (req, res) => {
  try {
    const halls = await db.WhereFought.findAll();
    const reply = halls.length > 0 ? { data: halls } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/WhereFought/:war_id', async (req, res) => {
  try {
    const side = await db.outcomes.findAll({
      where: {
        war_id: req.params.war_id
      }
    });

    res.json(side);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.post('/WhereFought', async (req, res) => {
  const side = await db.WhereFought.findAll();
  const currentId = (await side.length) + 1;
  try {
    const newOWhereFought = await db.WhereFought.create({
      war_id: currentId,
      location_id: req.body.location_id
    });
    res.json(newOWhereFought);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.delete('/WhereFought/:war_id', async (req, res) => {
  try {
    await db.WhereFought.destroy({
      where: {
        war_id: req.params.war_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/WhereFought', async (req, res) => {
  try {
    await db.WhereFought.update(
      {
        location_id: req.body.location_id
      },
      {
        where: {
          war_id: req.body.war_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});
//----------------------------------------------------------------------------
/// //////////////////////////////////
/// ///////Custom SQL Endpoint////////
/// /////////////////////////////////
const macrosCustom = 'SELECT `Dining_Hall_Tracker`.`Meals`.`meal_id` AS `meal_id`,`Dining_Hall_Tracker`.`Meals`.`meal_name` AS `meal_name`,`Dining_Hall_Tracker`.`Macros`.`calories` AS `calories`,`Dining_Hall_Tracker`.`Macros`.`carbs` AS `carbs`,`Dining_Hall_Tracker`.`Macros`.`sodium` AS `sodium`,`Dining_Hall_Tracker`.`Macros`.`protein` AS `protein`,`Dining_Hall_Tracker`.`Macros`.`fat` AS `fat`,`Dining_Hall_Tracker`.`Macros`.`cholesterol` AS `cholesterol`FROM(`Dining_Hall_Tracker`.`Meals`JOIN `Dining_Hall_Tracker`.`Macros`)WHERE(`Dining_Hall_Tracker`.`Meals`.`meal_id` = `Dining_Hall_Tracker`.`Macros`.`meal_id`)';
router.get('/table/data', async (req, res) => {
  try {
    const result = await db.sequelizeDB.query(macrosCustom, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

const mealMapCustom = `SELECT hall_name,
  hall_address,
  hall_lat,
  hall_long,
  meal_name
FROM
  Meals m
INNER JOIN Meals_Locations ml 
  ON m.meal_id = ml.meal_id
INNER JOIN Dining_Hall d
ON d.hall_id = ml.hall_id;`;
router.get('/map/data', async (req, res) => {
  try {
    const result = await db.sequelizeDB.query(mealMapCustom, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});
router.get('/custom', async (req, res) => {
  try {
    const result = await db.sequelizeDB.query(req.body.query, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

export default router;
