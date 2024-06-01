import React from "react";
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
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.

                <Form>
                    <input className="w-80 p-3 outline-none border" placeholder="name"></input>
                </Form>

            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UpdateProfile;
