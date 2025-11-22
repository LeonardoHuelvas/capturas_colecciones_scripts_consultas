db.citas.aggregate([
  { $group: { _id: "$medico", total: { $sum: 1 } } }
])
