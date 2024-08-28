import { TbPencilMinus } from "react-icons/tb";
import Table from "../../ui/Table";
import toLocaleDateShort from "../../utils/toLocalDateShort";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers";
import truncateText from "../../utils/truncateText";
import { HiOutlineTrash } from "react-icons/hi";
import Modal from "../../ui/Modal";
import { useState } from "react";

function ProjectRow({ project, index }) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(project.title, 30)}</td>
      <td>{project.category.title}</td>
      <td>{toPersianNumbersWithComma(project.budget)}</td>
      <td>{toLocaleDateShort(project.deadline)}</td>
      <td>
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </td>
      <td>{project.freelancer?.name || "-"}</td>
      <td>
        {project.status === "OPEN" ? <span>باز</span> : <span>بسته</span>}
      </td>
      <td>
        <div className="flex items-center gap-x-4">
          <button onClick={() => setIsEditOpen(true)}>
            <TbPencilMinus className="w-5 h-5 text-primary-900" />
          </button>
          <Modal
            title="Modal Title"
            open={isEditOpen}
            onClose={() => setIsEditOpen(false)}
          ></Modal>
          <button>
            <HiOutlineTrash className="w-5 h-5 text-error" />
          </button>
        </div>
      </td>
    </Table.Row>
  );
}
export default ProjectRow;
