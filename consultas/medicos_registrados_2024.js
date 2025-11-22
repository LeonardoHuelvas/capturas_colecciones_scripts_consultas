db.medicos.countDocuments({
  fecha_registro: { $gte: ISODate("2024-01-01") }
})
