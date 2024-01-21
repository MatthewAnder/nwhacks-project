import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Select,
  Input,
  FormLabel,
} from "@chakra-ui/react";

import { useState } from "react";

import { useForm } from "react-hook-form";

function PopUp() {
  return (
    <Popover>
      <PopoverTrigger>
        <Button color="teal" p={6}>Create Event</Button>
      </PopoverTrigger>

      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Sport Creation Menu</PopoverHeader>

        <PopoverForm />
      </PopoverContent>
    </Popover>
  );
}

const PopoverForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <PopoverBody paddingY={4} paddingX={7}>
        <body className="popUpFill">
          {/* Dropdown Sport */}
          <FormLabel>Enter Sport:</FormLabel>
          <Select
            placeholder="Select sport"
            {...register("sport", { required: true })}
          >
            <option value="basketball">Basketball</option>
            <option value="soccer">Soccer</option>
            <option value="tennis">Tennis</option>
            <option value="volley">Volleyball</option>
          </Select>

          {/* Time Input */}
          <FormLabel>Enter Time:</FormLabel>
          <Input
            placeholder="Please enter starting time"
            {...register("time", { required: true })}
          />

          {/* Capacity */}
          <FormLabel>Enter Capacity: </FormLabel>
          <Input
            placeholder="Please enter capacity"
            {...register("capacity", {
              required: "Capacity is required!",
              pattern: {
                value: /^[0-9]+$/,
                message: "Input must be a number!",
              },
            })}
          />
          {errors.capacity && <p className="errorMsg">{errors.capacity.message}</p>}

          {/* Location */}
          <FormLabel>Enter Location: </FormLabel>
          <Select
            placeholder="Select location"
            {...register("location", { required: true })}
          >
            <option value="Tennis Centre">UBC Tennis Centre</option>
            <option value="tb_park">Thunderbird Park</option>
            <option value="student_rec_centre">
              Student Recreation Centre
            </option>
            <option value="out_basketball_court">
              North Outdoor Basketball Court
            </option>
          </Select>
        </body>
      </PopoverBody>

      <PopoverFooter>
        <div className="popUpFooter">
          <Button bg="teal" color="white" type="submit">
            Confirm
          </Button>
        </div>
      </PopoverFooter>
    </form>
  );
};

export default PopUp;
