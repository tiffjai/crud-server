const Fruit = require('../models/Fruit')

const index = async (req, res) => {
   try {
    {const fruit = await Fruit.showAll()
        res.status(200).send(fruit)}
   } catch (error) {
    res.status(404).send({error:err})
   } 
  }


  const show = async (req, res) => {
    //consider dealing with cap letter or lower case
    
    const input = req.params.name.toLowerCase();
    try {
        const fruit =  await Fruit.show(input)
        res.status(200).send(fruit)
    
    } catch(err) {
        res.status(404).send({error: err})
    }
    
}


const create = async (req, res) => {
    const data = req.body;
    try{
    // 1. Call a method from the model
        const newFruit = await Fruit.create(data)
    // 2. Send a response wiht a status code and the element
    res.status(201).send(newFruit)
    }catch(err) {
        res.status(409).send({error:err})
    }
}

const update = async (req, res) => {
   
    const name = req.params.name.toLowerCase();
    try {
        const fruit = await Fruit.show(name)
        const updateFruit = await fruit.update(req.body)
        res.status(200).send(updateFruit)
    } catch (err) {
        res.status(404).send({error: err})
    }
}


const destroy = async (req, res) => {
    const name = req.params.name.toLowerCase();
    try {
        const fruit = await Fruit.show(name)
        const deleteFruit = await fruit.destroy()
        res.status(200).send(deleteFruit)
    } catch (err) {
        res.status(404).send({error: err})
    }
}

module.exports = {
    index,
    show,
    create,
    update,
    destroy
}