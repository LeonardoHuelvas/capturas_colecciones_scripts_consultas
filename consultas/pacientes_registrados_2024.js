db.pacientes.find({
  fecha_registro: { $gte: ISODate("2024-01-01") }
})
