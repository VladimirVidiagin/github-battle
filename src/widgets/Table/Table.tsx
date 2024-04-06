import PropTypes from "prop-types";
import Tooltip from "../../shared/Tooltip/Tooltip";
import { hashtag } from "../../shared/Icons/Icons";

interface MoreInfoProps {
  created_at: string;
  language?: string;
  updated_at: string;
  watchers: number;
  login: string;
  forked_count: number;
  type: string;
}

function MoreInfo({
  created_at,
  forked_count,
  language,
  updated_at,
  watchers,
  login,
}: MoreInfoProps) {
  return (
    <ul className="tooltip stack">
      <li className="split">
        <span>By:</span> <span>{login}</span>
      </li>
      {language && (
        <li className="split">
          <span>Language:</span> <span>{language}</span>
        </li>
      )}
      <li className="split">
        <span>Created:</span>{" "}
        <span>{new Date(created_at).toLocaleDateString()}</span>
      </li>
      <li className="split">
        <span>Updated:</span>{" "}
        <span>{new Date(updated_at).toLocaleDateString()}</span>
      </li>
      <li className="split">
        <span>Watchers:</span>
        <span>{watchers.toLocaleString()}</span>
      </li>
      {forked_count && (
        <li className="split">
          <span>Forked:</span> <span>{forked_count.toLocaleString()}</span>
        </li>
      )}
    </ul>
  );
}

function TableHead() {
  return (
    <thead>
      <tr>
        <th style={{ width: "5%" }}>{hashtag}</th>
        <th style={{ width: "50%" }}>Repository</th>
        <th style={{ width: "15%" }}>Stars</th>
        <th style={{ width: "15%" }}>Forks</th>
        <th style={{ width: "15%" }}>OpenIssue</th>
      </tr>
    </thead>
  );
}

interface TableRowProps {
  index: number;
  owner: {
    login: string;
    avatar_url: string;
    type: string;
  };
  stargazers_count: number;
  forks: number;
  open_issues: number;
  name: string;
  created_at: string;
  language: string;
  updated_at: string;
  watchers: number;
  forked_count: number;
}

function TableRow({
  index,
  owner,
  stargazers_count,
  forks,
  open_issues,
  name,
  created_at,
  language,
  updated_at,
  watchers,
  forked_count,
}: TableRowProps) {
  const { login, avatar_url, type } = owner;
  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <Tooltip
          element={
            <MoreInfo
              forked_count={forked_count}
              created_at={created_at}
              language={language}
              updated_at={updated_at}
              watchers={watchers}
              type={type}
              login={login}
            />
          }
        >
          <div className="row gap-md">
            <img
              width={32}
              height={32}
              className="avatar"
              src={avatar_url}
              alt={`Avatar for ${login}`}
            />
            <a href={`https://github.com/${login}/${name}`}>{name}</a>
          </div>
        </Tooltip>
      </td>
      <td>{stargazers_count}</td>
      <td>{forks}</td>
      <td>{open_issues}</td>
    </tr>
  );
}

TableRow.propTypes = {
  index: PropTypes.number.isRequired,
  owner: PropTypes.object.isRequired,
  stargazers_count: PropTypes.number.isRequired,
  forks: PropTypes.number.isRequired,
  open_issues: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

interface TableProps {
  repos: TableRowProps[];
}

export default function Table({ repos }: TableProps) {
  return (
    <table>
      <TableHead />
      <tbody>
        {repos.map((repo, index) => {
          //@ts-ignore
          return <TableRow key={index} index={index} {...repo} />;
        })}
      </tbody>
    </table>
  );
}
