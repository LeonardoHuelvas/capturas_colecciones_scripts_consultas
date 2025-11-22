db.historiales.aggregate([
  { $group: { _id: "$diagnostico", total: { $sum: 1 } } },
  { $sort: { total: -1 } }
])
