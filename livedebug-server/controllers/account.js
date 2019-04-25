const Account = require('../models/account');

class AccountController {
  static findAccounts(req, res) {
    Account.findOne({ accountNumber: req.params.accountNumber })
     .populate('user')
     .then(account => {
       res.status(200).json(account);
     })
     .catch(err => {
       res.status(500).json(err);
     })
  }

  static newAccount(req, res) {
    // console.log({masuk: 'controlleraccount.new', balance: req.body.balance})
    // console.log({headers: req.headers, user: req.user})
    let acc = {};
    // console.log('null')

    if (req.body.balance) {
      acc = {
        balance: req.body.balance,
        userId: req.user._id
      }
    } else {
      acc = {
        userId: req.user._id
      }
    }
    // console.log(acc)

    Account.create(acc)
     .then(account => {
       console.log({account})
       res.status(201).json(account);
     })
     .catch(err => {
       res.status(500).json(err);
     })
  }

  static remove(req, res) {
    Account
     .deleteOne({
       accountNumber: req.params.accountNumber
     })
     .then(deleted => {
       res.status(200).json(deleted);
     })
     .catch(err => {
       res.status(500).json(err);
     })
  }

}

module.exports = AccountController
