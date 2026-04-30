"use client";

import {CircleInfoFill} from "@gravity-ui/icons";
import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";

export function BuyNow() {
  return (
    <Modal>
      <Button className={'bg-green-800 w-full'}>Book Now</Button>
      <Modal.Backdrop variant="blur">
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <CircleInfoFill className="size-5" color="green"/>
              </Modal.Icon>
              <Modal.Heading>Buy now</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form className="flex flex-col gap-4">
                  <TextField className="w-full" name="name" type="text">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                  <TextField className="w-full" name="phone" type="tel">
                    <Label>Phone</Label>
                    <Input placeholder="Enter your phone number" />
                  </TextField>
                  <TextField className="w-full" name="location">
                    <Label>Location</Label>
                    <Input placeholder="Enter your location" />
                  </TextField>
                
                </form>
              </Surface>
            </Modal.Body>
            <Modal.Footer>
              <Button slot="close" className={'text-green-800'} variant="secondary">
                Cancel
              </Button>
              <Button className={'bg-green-800 text-white'} slot="close">Book</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}