import React, { useState } from "react";

const MenuItems = [
    {
        "menuname": 'Home',
        "submenu": [
            {"submenuname": "Home Child 1"},
            {"submenuname": "Home Child 2"},
            {"submenuname": "Home Child 3"}
        ]
    },
    {
        "menuname": 'About',
        "submenu": [
            {"submenuname": "About Child 1"},
            {"submenuname": "About Child 2"},
            {"submenuname": "About Child 3"}
        ]
    },
    {
        "menuname": 'Contact'
    }
]

const Menu = () => {
    return (
      
        <ul tabIndex={0} className="menu  dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          {MenuItems.map((item) => {
            return (
              <li key={item.menuname}>
                <MenuItem item={item} />
              </li>
            );
          })}
        </ul>
        
      
    );
  };
const MenuItem:  React.FC<{ item :any}> = ({ item }) => {
  const [isSubMenuShow, setIsSubMenuShow] = useState(false);

  return (
    <div>
      <div onClick={() => setIsSubMenuShow(!isSubMenuShow)}>
        {item.menuname}
      </div>
      {item.submenu && isSubMenuShow && <SubMenu dropDownItem={item.submenu} />}
    </div>
  );
};

const SubMenu :React.FC<{ dropDownItem:[]}>= ({ dropDownItem }) => {
    console.log(dropDownItem)
  return (
    <div className="drop-down">
      <ul>
        {dropDownItem.map((item:any, id:any) => {
          return (
            <>
            <li key={id}>{item.submenuname}</li>;
          </>)
        //   
        })}
      </ul>
    </div>
  );
};

export default Menu;