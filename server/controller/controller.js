const User = require("../model/model"); // Importujte model používateľa

const registerUser = async (req, res) => {
  try {
    // Získanie údajov z požiadavky
    const { name, email, password, repeatPassword } = req.body;
    console.log(req.body);

    // Skontrolujte, či používateľ s touto e-mailovou adresou už neexistuje
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ msg: 'Používateľ s touto e-mailovou adresou už existuje' });
    }

    // Vytvorte nového používateľa
    user = new User({
      name,
      email,
      password,
      repeatPassword
    });

    // Uložte používateľa do databázy
    await user.save();

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

const loginUser = async (req, res) => {
  try {
    console.log(req.body);
    

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
}

module.exports = {
  registerUser,
  loginUser,
};