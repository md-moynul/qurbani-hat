"use client";

import { authClient } from "@/lib/auth-client";
import { PencilToSquare } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";


export default function EditProfile() {
    const handelUpdate = async(e) => {
          e.preventDefault();
        const formdata = new FormData(e.currentTarget)
        const {name , image} = Object.fromEntries(formdata.entries())
        // console.log(name ,image);
        
        await authClient.updateUser({
            image,
            name,
        })
    }
    return (
        <Modal>
            <Button variant="secondary"><PencilToSquare />Edit profile</Button>
            <Modal.Backdrop variant="blur">
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <PencilToSquare />
                            </Modal.Icon>
                            <Modal.Heading>Update Profile</Modal.Heading>

                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form onSubmit={handelUpdate} className="flex flex-col gap-4">
                                    <TextField className="w-full" name="name" type="text">
                                        <Label>Name</Label>
                                        <Input placeholder="Enter your name" />
                                    </TextField>
                                    <TextField className="w-full" name="image" type="url">
                                        <Label>Image url</Label>
                                        <Input placeholder="Enter your image url" />
                                    </TextField>

                                    <Modal.Footer>
                                        <Button slot="close" variant="secondary">
                                            Cancel
                                        </Button>
                                        <Button type="submit" slot="close">Update</Button>
                                    </Modal.Footer>
                                </form>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}