import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ColumnGroup } from "primereact/columngroup";
import { Row } from "primereact/row";
import axios from "axios";
import { useEffect } from "react";

const Table = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://172.20.10.2:24678/table", {})
      .then((response) => setData(response.data));
  }, []);
  console.log(data)
  let headerGroup = (
    <ColumnGroup>
      <Row>
        <Column header="Lead" sortable field="lead" />
        <Column header="Mail" sortable field="mail" />
        <Column header="Name" sortable field="name" />
        <Column header="Surname" sortable field="surname" />
        <Column header="DOB" sortable field="date" />
        <Column header="Address" sortable field="address" />
      </Row>
    </ColumnGroup>
  );
  
  return (
    <div>
      <DataTable
        value={data}
        paginator
        rowsPerPageOptions={[5, 10, 20, 30, 40, 50, 60]}
        rows={5}
        first={0}
        headerColumnGroup={headerGroup}
      >
        <Column field="lead" body={data?.lead} />
        <Column field="mail" body={data?.mail} />
        <Column field="name" body={data?.name} />
        <Column field="surname" body={data?.surname} />
        <Column field="date" body={data?.date} />
        <Column field="address" body={data?.address} />
      </DataTable>
    </div>
  );
};

export default Table;
