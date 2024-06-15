import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RxUpdate } from "react-icons/rx";
import { Form } from "react-router-dom";


const UpdateProfile = () => {

  const [userData, setUserData] = useState({name:'', username:''})

  const handleUserData =(property,e) => {
    setUserData({
      ...userData, property: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('form submit')
  }

  return (
    <div>
      <Dialog>
        <DialogTrigger>
            <RxUpdate size={20}/>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
            <DialogDescription>
              make the changes to update the profile
                <Form>
                    <input className="w-80 mt-5 p-3 outline-none border" placeholder="name"
                      value={userData.name} onChange={(e)=>handleUserData(name,e)}>
                    </input>
                    <input className="w-80 mt-2 p-3 outline-none border" placeholder="usename"
                      value={userData.username} onChange={(e)=>handleUserData(username,e)}>
                    </input>
                    <section className="flex gap-x-5 mt-2 p-3">
                      <div>avatar:</div>
                      <input className="outline-none" type="file"></input>
                    </section>
                    <button className="bg-gray-400" onClick={()=>console.log('hello')}>Submit</button>
                </Form>

            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UpdateProfile;
