import Input from "./Input";
import { useRef } from "react";
import Modal from "./Modal";
import P from './P'

export default function NewProject({ onAddNewProject, onClose }) {
  const title = useRef();
  const description = useRef();
  const date = useRef();
  const modal = useRef();

  function handelSave() {
    const titleEntered = title.current.value;
    const descriptionEntered = description.current.value;
    const dateEntered = date.current.value;

    if (
      titleEntered.trim() === "" ||
      descriptionEntered.trim() === "" ||
      dateEntered.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onAddNewProject({
      title: titleEntered,
      description: descriptionEntered,
      date: dateEntered,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Okey">
        <h2 className="text-xl font-bold text-stone-700 my-4" >Invalid Input</h2>
        <P>Oops ... looks like you forget to enter a values</P>
        <P>Please make sure you provide a valid value for every input field</P>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={onClose}
              className="text-stone-800 hover:text-stone-900"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handelSave}
              className="px-6 py-2 bg-stone-800 text-slate-50 hover:bg-slate-950 rounded-md"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label="Title" />
          <Input ref={description} label="Description" textarea />
          <Input type="date" ref={date} label="Due Date" />
        </div>
      </div>
    </>
  );
}
