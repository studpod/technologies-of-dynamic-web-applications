/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("w5y4wfzcsufcva7")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bnpjr5wr",
    "name": "status",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "not started",
        "done",
        "ongoing",
        "onhold",
        "archived"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("w5y4wfzcsufcva7")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bnpjr5wr",
    "name": "status",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "done",
        "ongoing",
        "onhold",
        "archived"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
