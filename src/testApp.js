import React from "react";
import { v4 as uuid } from "uuid";

import "./styles.css";

class Tabs extends React.Component {
  state = {
    tabs: [
      {
        id: 1,
        name: "Tab 1",
        content:
          "this is tab 1 loremAt vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
      },
      { id: 2, name: "Tab 2", content: "This is Tab 2" },
      { id: 3, name: "Tab 3", content: "this is Tab 3" },
    ],
    currentTab: { id: 1, name: "Tab 1", content: "this is tab 1" },
    editMode: false,
    editTabNameMode: false,
    hoveredtab: null,
  };

  handleDoubleClick = () => {
    this.setState({
      editTabNameMode: true,
    });
  };

  handleEditTabName = (e) => {
    const { currentTab, tabs } = this.state;

    const updatedTabs = tabs.map((tab) => {
      if (tab.id === currentTab.id) {
        return {
          ...tab,
          name: e.target.value,
        };
      } else {
        return tab;
      }
    });

    this.setState({
      tabs: updatedTabs,
      currentTab: {
        ...currentTab,
        name: e.target.value,
      },
    });
  };

  handleOnBlur = () => {
    this.setState({
      editTabNameMode: false,
    });
  };

  createTabs = () => {
    const { tabs, currentTab, editTabNameMode, hoveredtab } = this.state;

    const allTabs = tabs.map((tab) => {
      return (
        <>
          <li>
            {editTabNameMode && currentTab.id === tab.id ? (
              <input
                value={tab.name}
                onBlur={this.handleOnBlur}
                onChange={this.handleEditTabName}
              />
            ) : (
              <button
                className={currentTab.id === tab.id ? "tab active" : "tab"}
                onClick={() => this.handleSelectTab(tab)}
                onDoubleClick={() => this.handleDoubleClick(tab)}
                onMouseEnter={() => {
                  if (tab.id > 3) this.setState({ hoveredtab: tab.id });
                }}
                onMouseLeave={() => {
                  if (tab.id > 3) this.setState({ hoveredtab: null });
                }}
              >
                {tab.name}
                {hoveredtab && hoveredtab === tab.id ? (
                  <span
                    className="deletebutton"
                    onClick={() => this.handleDeleteTab(currentTab)}
                  >
                    x
                  </span>
                ) : null}
              </button>
            )}
          </li>
        </>
      );
    });

    return <ul className="nav nav-tabs">{allTabs}</ul>;
  };

  handleSelectTab = (tab) => {
    this.setState({
      currentTab: tab,
      editMode: false,
      editTabNameMode: false,
    });
  };

  handleAddTab = () => {
    const { tabs } = this.state;

    const newTabObject = {
      id: tabs[tabs.length - 1].id + 1,
      name: `Tab ${tabs[tabs.length - 1].id + 1}`,
      //name: `Tab ${tabs.length + 1}`,
      content: `This is Tab ${tabs[tabs.length - 1].id + 1}`,
    };

    this.setState({
      tabs: [...tabs, newTabObject],
      currentTab: newTabObject,
      editMode: false,
      editTabNameMode: false,
    });
  };

  handleDeleteTab = (tabToDelete) => {
    const { tabs } = this.state;
    const tabToDeleteIndex = tabs.findIndex((tab) => tab.id === tabToDelete.id);

    const updatedTabs = tabs.filter((tab, index) => {
      return index !== tabToDeleteIndex;
    });

    const previousTab =
      tabs[tabToDeleteIndex - 1] || tabs[tabToDeleteIndex + 1] || {};

    this.setState({
      tabs: updatedTabs,
      editMode: false,
      editTabNameMode: false,
      currentTab: previousTab,
    });
  };

  setEditMode = () => {
    this.setState({
      editMode: !this.state.editMode,
    });
  };

  handleContentChange = (e) => {
    const { tabs, currentTab } = this.state;

    const updatedTabs = tabs.map((tab) => {
      if (tab.name === currentTab.name) {
        return {
          ...tab,
          content: e.target.value,
        };
      } else {
        return tab;
      }
    });

    this.setState({
      tabs: updatedTabs,
      currentTab: {
        ...currentTab,
        content: e.target.value,
      },
    });
  };

  handleChev = () => {
    let { currentTab, tabs } = this.state;
    let index = tabs.findIndex((item) => {
      return item.id == currentTab.id;
    });
    if (index == tabs.length - 1) {
      return;
    }
    this.setState({ currentTab: tabs[index + 1] });
  };

  handleminusChev = () => {
    let { currentTab, tabs } = this.state;
    let index = tabs.findIndex((item) => {
      return item.id == currentTab.id;
    });
    if (index == 0) {
      return;
    }
    this.setState({ currentTab: tabs[index - 1] });
  };

  render() {
    const { currentTab, editMode, tabs } = this.state;
    return (
      <div className="container">
        <div className="well">
          <div className="header-container">
            <div>
              <button
                className="add-tab-button"
                onClick={this.handleAddTab}
                disabled={tabs.length == 10}
              >
                +
              </button>
              <button
                className="chevadd"
                disabled={tabs[tabs.length - 1].id == currentTab.id}
                onClick={this.handleChev}
              >
                &gt;
              </button>
            </div>

            <div className="ul-container">
              <button
                className="chevsub"
                disabled={currentTab.id == 1}
                onClick={this.handleminusChev}
              >
                &lt;
              </button>
              {this.createTabs()}
            </div>
          </div>

          <div className="tab-content">
            {editMode ? (
              <div>
                <textarea
                  onChange={this.handleContentChange}
                  value={this.state.currentTab.content}
                />
                <button className="save-button" onClick={this.setEditMode}>
                  Done
                </button>
              </div>
            ) : (
              <div className="content">
                <p>{currentTab.content}</p>
                {currentTab.id ? (
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <button
                      className="edit-mode-button"
                      onClick={this.setEditMode}
                    >
                      Edit
                    </button>
                  </div>
                ) : (
                  ""
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Tabs;
