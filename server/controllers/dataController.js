const TodoData = require("../model/Data");

//to get all data
const All_Data  = async(req, res) =>{
    try{
        const AllData = await TodoData.find();     //find - method of mongodb which finds all listing
        res.json(AllData);
        }
        catch(error){
        res.json({message : error});
    }
}

// single data
const single_Data  =async(req, res) =>{
    try {
        const todo = await TodoData.findById(req.params.id);
        res.json(todo);
      } catch (error) {
        res.json({ message: error });
      }
}

// to add new data
const create_Data  =async(req, res) =>{
    const todo = new TodoData({
        task: req.body.task,
        iscomplete: req.body.iscomplete,
       
      });
    
      try {
        const savedTodo = await todo.save();
        res.send(savedTodo);
      } catch (error) {
        res.status(400).send(error);
      }
}

// to update data
const Update_Data  =async(req, res) =>{

    try {
        const todo = {
          task: req.body.task,
          iscomplete: req.body.iscomplete,
    
        };
    
        const updatedTodo = await TodoData.findByIdAndUpdate(
          { _id: req.params.id },
          todo
        );
        res.json(updatedTodo);
      } catch (error) {
        res.json({ message: error });
      }
}

// to delete data
const Delete_Data  =async(req, res) =>{
    try {
        const removetodo = await Product.findByIdAndDelete(req.params.id);
        res.json(removetodo);
      } catch (error) {
        res.json({ message: error });
      }
}


module.export = {
    All_Data,
    single_Data,
    create_Data,
    Update_Data,
    Delete_Data 
}