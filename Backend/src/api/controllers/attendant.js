const User = require('../models/user');
const Attendant = require('../models/attendant');
const Event = require('../models/event');

const getAttendants = async (req, res, next) => {
  try {
    const attendants = await Attendant.find().populate('confirmedEvents');
    return res.status(200).json(attendants);
  } catch (error) {
    console.log(error);
    return res.status(400).json("Request error showing 'attendants'", error);
  }
};

const getAttendantsById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const attendant = await Attendant.findById(id).populate('confirmedEvents');
    return res.status(200).json(attendant);
  } catch (error) {
    console.log(error);
    return res.status(400).json(`Error finding attendant`, error);
  }
};

const confirmAssistance = async (req, res, next) => {
  try {
    const { name, email } = req.body;
    const { eventId } = req.params;
    console.log(eventId);
    const existingAttendant = await Attendant.findOne({
      email,
      confirmedEvents: eventId
    });

    if (existingAttendant) {
      return res
        .status(400)
        .json({ message: 'This user is already confirmed in this event' });
    }

    let newAttendant;

    try {
      if (req.user) {
        newAttendant = new Attendant({
          name: req.user.name,
          email: req.user.email,
          confirmedEvents: eventId
        });

        await newAttendant.save();

        await User.findByIdAndUpdate(
          req.user._id,
          {
            $addToSet: { eventsToAttend: eventId }
          },
          { new: true }
        );
      } else {
        newAttendant = new Attendant({
          name,
          email,
          confirmedEvents: eventId
        });
        await newAttendant.save();
      }

      const event = await Event.findByIdAndUpdate(
        eventId,
        {
          $addToSet: { confirmedAttendants: newAttendant._id }
        },
        { new: true }
      );
      console.log(eventId);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error confirming attendance' });
    }

    return res
      .status(200)
      .json({ message: `Assistance confirmed succesfully`, newAttendant });
  } catch (error) {
    console.log(error);
    return res.status(400).json('Error confirming attendance', error);
  }
};

module.exports = {
  getAttendants,
  getAttendantsById,
  confirmAssistance
};
