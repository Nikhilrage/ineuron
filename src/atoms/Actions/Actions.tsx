import React from "react";
import { FiEdit2, FiCopy } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import {
  setOpenDeleteUserModal,
  setOpenModal,
  setSeleteApiVariableId,
} from "../../Redux/slices/dashboardStateSlice";
import { useAppDispatch } from "../../Redux/store";
import { copyTextToClipboard } from "../../utils/copyfunction";

interface ActionsProps {
  textToBeCopied: string;
  idToBeDeleted: string;
}
const Actions = (props: ActionsProps) => {
  const dispatch = useAppDispatch();

  const copyTextHandler = () => {
    copyTextToClipboard(props.textToBeCopied);
  };
  return (
    <div className="flex flex-row justify-around ">
      <div className="tab_Actions_Icons" onClick={copyTextHandler}>
        <FiCopy className="text-xl " />
      </div>
      <div
        className="tab_Actions_Icons "
        onClick={() => dispatch(setOpenModal(true))}
      >
        <FiEdit2 className="text-xl" />
      </div>
      <div
        className="tab_Actions_Icons"
        onClick={() => {
          dispatch(setSeleteApiVariableId(props.idToBeDeleted));
          dispatch(setOpenDeleteUserModal(true));
        }}
      >
        <AiOutlineDelete className="text-xl" />
      </div>
    </div>
  );
};

export default Actions;
