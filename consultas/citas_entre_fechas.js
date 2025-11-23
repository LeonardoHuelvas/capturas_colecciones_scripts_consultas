db.citas.find({
    fecha_cita: {
        $gte: ISODate("2024-03-01"),
        $lte: ISODate("2024-03-10")
    }
})