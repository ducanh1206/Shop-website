import { Button, Popconfirm as PosconfirmM } from "antd";

export const Popconfirm = ({ showCancel = true,description, ...props }) => {
  return (
    <PosconfirmM
      {...props}
      showCancel={false}
      okButtonProps={{hidden: true}}
      description={
        <>
          {description}
          <div className="mt-2" style={{display: "flex", justifyContent: "flex-end"}}>
            {
              showCancel && <Button outline className="btn-xxs btn-dark mr-2" onClick={props.onCancel}>{props.cancelText || "Cancel"}</Button>
            }
            <Button className="btn-xxs btn-dark" onClick={props.onConfirm}>{props.okText || "Ok"}</Button>
          </div>
        </>
      }
    />
  );
};
