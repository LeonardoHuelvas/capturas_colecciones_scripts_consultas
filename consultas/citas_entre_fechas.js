db.citas.find({
  fecha: {
    $gte: ISODate("2024-02-10"),
    $lte: ISODate("2024-02-20")
  }
})
