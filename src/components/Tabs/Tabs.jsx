import React, {useState} from 'react';
import cl from "./Tabs.module.scss";
import Pagination from "../Pagination/Pagination";


const Tabs = ({data}) => {
  const [ active, setActive ] = useState(data[0]?.title);

  const openTab = title => {
    setActive(title);
  }

  return (
    <>
      <div className={cl.tab}>
        {data.map((n, i) => (
          <button
            key={i}
            className={`${cl.tabcontent} ${n.title === active ? cl.active : ''}`}
            onClick={() => openTab(n.title)}
            data-index={i}
          >{n.title}</button>
        ))}
      </div>

      <div>
        {data.find(el => el.title === active).value}
      </div>

      <Pagination
        totalListLength={data.find(el => el.title === active).arrLength}
      />
    </>
  );
};

export default Tabs;