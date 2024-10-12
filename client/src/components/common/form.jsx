import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectTrigger, SelectValue } from "../ui/select";

const CommonForm = ({ formControls }) => {
  const renderInputsByComponentType = (getControlItem) => {
    let element = null;

    switch (getControlItem.componentType) {
      case "input":
        element = (
          <Input
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            type={getControlItem.type}
            id={getControlItem.name}
          />
        );

        break;
      case "select":
        element = (
          <Select>
            <SelectTrigger className="w-full">
                <SelectValue placeholder={getControlItem.placeholder}/>
            </SelectTrigger>
            <SelectContent>
                {
                    getControlItem.options && getControlItem.options.length > 0  
                }
            </SelectContent>
          </Select>
        );

        break;
      case "textarea":
        element = (
          <Input
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            type={getControlItem.type}
            id={getControlItem.name}
          />
        );

        break;

      default:
        element = (
            <Input
              name={getControlItem.name}
              placeholder={getControlItem.placeholder}
              type={getControlItem.type}
              id={getControlItem.name}
            />
          );
        break;

    }
    return element
  };

  return (
    <form>
      <div className="flex flex-col gap-3">
        {formControls.map((controleItem) => (
          <div className="grid w-full gap-1.5" key={controleItem.name}>
            <Label className="mb-1">{controleItem.label}</Label>
            {renderInputsByComponentType(controleItem)}
          </div>
        ))}
      </div>
    </form>
  );
};

export default CommonForm;
