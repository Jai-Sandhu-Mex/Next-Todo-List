const {default: mongoose} = require("mongoose"); 

const Schema = new mongoose.Schema({
    title:{ type:String, required:true },
    description:{ type:String, required:true },
    iscompleted:{ type:Boolean, default:false },
},
{ timestamps:true });

const TodoModel = mongoose.models.Todo || mongoose.model("Todo", Schema);

export default TodoModel;