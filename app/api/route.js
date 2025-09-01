import { ConnectDB} from "@/lib/config/db";
import TodoModel from "@/lib/models/TodoModels";
import { NextResponse } from "next/server";


const loadDB = async()=>{
    await ConnectDB();
}
loadDB();
export async function GET(request){
    const todo = await TodoModel.find({});
     return NextResponse.json({todos:todo});
}

export async function POST(request){
    const{title, description} = await request.json();

    await TodoModel.create({
        title, description});
    
     return NextResponse.json({message:"Todo Created Successfully"});
}

export async function DELETE(request){
    const mongoId = await request.nextUrl.searchParams.get("mongoId");
    await  TodoModel.findByIdAndDelete(mongoId);
    return NextResponse.json({message:"Todo Deleted Successfully"});
}
export async function PUT(request){
    const mongoId = await request.nextUrl.searchParams.get("mongoId");
    await  TodoModel.findByIdAndDelete(mongoId,{
        $set:{
            isCompleted:true
        }});
    return NextResponse.json({message:"Todo Completed Successfully"});
}