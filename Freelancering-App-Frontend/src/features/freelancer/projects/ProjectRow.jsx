import Table from "../../ui/Table";
import toLocaleDateShort from "../../utils/toLocalDateShort";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers";
import truncateText from "../../utils/truncateText";
import { useState } from "react";
import { useRemoveProject } from "./useRemoveProject";
import { MdAssignmentAdd } from "react-icons/md";

const status = {
  OPEN: {
    label: "باز",
    className: "badge--success",
  },
  CLOSE: {
    label: "بسته",
    className: "badge--danger",
  },
};

function ProjectRow({ project, index }) {
  const { status } = project;

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(project.title, 30)}</td>
      <td>{toPersianNumbersWithComma(project.budget)}</td>
      <td>{toLocaleDateShort(project.deadline)}</td>
      <td>
        <span className={`badge ${projectStatus[status].className}`}>
          {projectStatus[status].label}
        </span>
      </td>
      <td>
        <button>
          <MdAssignmentAdd className="w-5 h-5 text-primary-900" />
        </button>
      </td>
    </Table.Row>
  );
}
export default ProjectRow;
