import React from "react";
import { DashboardActivityWrapper } from "./style";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const DashboarActivity = (props) => (
  <DashboardActivityWrapper>
    <div className="activity-list-title">
      <p>Recent Activity</p>
    </div>
    <ul className="list-group">
      {props.activities.map((activity) => (
        <li className="list-group-item" key={activity.id}>
          <div className="activity-content">
            <div className="activity-icon">
              {activity.type === "request" ? (
                <svg
                  class="octicon octicon-git-pull-request"
                  viewBox="0 0 12 16"
                  version="1.1"
                  width="12"
                  height="16"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0010 15a1.993 1.993 0 001-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 00-1 3.72v6.56A1.993 1.993 0 002 15a1.993 1.993 0 001-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
                  ></path>
                </svg>
              ) : (
                <svg
                  class="octicon octicon-issue-opened"
                  viewBox="0 0 14 16"
                  version="1.1"
                  width="14"
                  height="16"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 011.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"
                  ></path>
                </svg>
              )}
            </div>
            <div className="activity-title">
              <p>{activity.title}</p>
            </div>
            <div className="activity-user">
              <AccountCircleIcon fontSize="large" />
            </div>
            <div className="activity-repo">
              <p>{activity.repository}</p>
              <p>{activity.activity}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </DashboardActivityWrapper>
);

export default DashboarActivity;
