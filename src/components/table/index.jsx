import React, { Component,useState, useEffect  } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ColumnGroup } from "primereact/columngroup";
import { Row } from "primereact/row";


const Table = () => {
  const columns = [
    {
      lead: "447906347367",
      name: "Leah",
      surname: "Aarons",
      dob: "12.02.2004",
      address: "b'London, United Kingdom'",
    },
    {
      lead: "447906347412",
      name: "Debbie",
      surname: "Barr",
      dob: "13.11.2001",
      address: "b'Powick'",
    },
    {
      lead: "447906347473",
      name: "Alexander",
      surname: "Kirby",
      dob: "05.12.1965",
      address: "b'Wimbledon, United Kingdom'",
    },
    {
      lead: "447906347473",
      name: "Alexander",
      surname: "Kirby",
      dob: "05.12.1965",
      address: "b'Wimbledon, United Kingdom'",
    },
    {
      lead: "447906347473",
      name: "Alexander",
      surname: "Kirby",
      dob: "05.12.1965",
      address: "b'Wimbledon, United Kingdom'",
    },
    {
      lead: "447906347473",
      name: "Alexander",
      surname: "Kirby",
      dob: "05.12.1965",
      address: "b'Wimbledon, United Kingdom'",
    },
    {
      lead: "447906347473",
      name: "Alexander",
      surname: "Kirby",
      dob: "05.12.1965",
      address: "b'Wimbledon, United Kingdom'",
    },
    {
      lead: "447906347473",
      name: "Alexander",
      surname: "Kirby",
      dob: "05.12.1965",
      address: "b'Wimbledon, United Kingdom'",
    },
    {
      lead: "447906347473",
      name: "Alexander",
      surname: "Kirby",
      dob: "05.12.1965",
      address: "b'Wimbledon, United Kingdom'",
    },
    {
      lead: "447906347473",
      name: "Alexander",
      surname: "Kirby",
      dob: "05.12.1965",
      address: "b'Wimbledon, United Kingdom'",
    },
    {
      lead: "447906347473",
      name: "Alexander",
      surname: "Kirby",
      dob: "05.12.1965",
      address: "b'Wimbledon, United Kingdom'",
    },
    {
      lead: "447906347473",
      name: "Alexander",
      surname: "Kirby",
      dob: "05.12.1965",
      address: "b'Wimbledon, United Kingdom'",
    },
    {
      lead: "447906347367",
      name: "Leah",
      surname: "Aarons",
      dob: "12.02.2004",
      address: "b'London, United Kingdom'",
    },
    {
      lead: "447906347412",
      name: "Debbie",
      surname: "Barr",
      dob: "13.11.2001",
      address: "b'Powick'",
    },
    {
      lead: "447906347473",
      name: "Alexander",
      surname: "Kirby",
      dob: "05.12.1965",
      address: "b'Wimbledon, United Kingdom'",
    },
    {
      lead: "447906347473",
      name: "Alexander",
      surname: "Kirby",
      dob: "05.12.1965",
      address: "b'Wimbledon, United Kingdom'",
    },
    {
      lead: "447906347473",
      name: "Alexander",
      surname: "Kirby",
      dob: "05.12.1965",
      address: "b'Wimbledon, United Kingdom'",
    },
    {
      lead: "447906347473",
      name: "Alexander",
      surname: "Kirby",
      dob: "05.12.1965",
      address: "b'Wimbledon, United Kingdom'",
    },
    {
      lead: "447906347473",
      name: "Alexander",
      surname: "Kirby",
      dob: "05.12.1965",
      address: "b'Wimbledon, United Kingdom'",
    },
    {
      lead: "447906347473",
      name: "Alexander",
      surname: "Kirby",
      dob: "05.12.1965",
      address: "b'Wimbledon, United Kingdom'",
    },
    {
      lead: "447906347473",
      name: "Alexander",
      surname: "Kirby",
      dob: "05.12.1965",
      address: "b'Wimbledon, United Kingdom'",
    },
    {
      lead: "447906347473",
      name: "Alexander",
      surname: "Kirby",
      dob: "05.12.1965",
      address: "b'Wimbledon, United Kingdom'",
    },
    {
      lead: "447906347473",
      name: "Alexander",
      surname: "Kirby",
      dob: "05.12.1965",
      address: "b'Wimbledon, United Kingdom'",
    },
    {
      lead: "447906347473",
      name: "Alexander",
      surname: "Kirby",
      dob: "05.12.1965",
      address: "b'Wimbledon, United Kingdom'",
    },{
      lead: "447906347367",
      name: "Leah",
      surname: "Aarons",
      dob: "12.02.2004",
      address: "b'London, United Kingdom'",
    },
    {
      lead: "447906347412",
      name: "Debbie",
      surname: "Barr",
      dob: "13.11.2001",
      address: "b'Powick'",
    },
    {
      lead: "447906347473",
      name: "Alexander",
      surname: "Kirby",
      dob: "05.12.1965",
      address: "b'Wimbledon, United Kingdom'",
    },
    {
      lead: "447906347473",
      name: "Alexander",
      surname: "Kirby",
      dob: "05.12.1965",
      address: "b'Wimbledon, United Kingdom'",
    },
    {
      lead: "447906347473",
      name: "Alexander",
      surname: "Kirby",
      dob: "05.12.1965",
      address: "b'Wimbledon, United Kingdom'",
    },
    {
      lead: "447906347473",
      name: "Alexander",
      surname: "Kirby",
      dob: "05.12.1965",
      address: "b'Wimbledon, United Kingdom'",
    },
    {
      lead: "447906347473",
      name: "Alexander",
      surname: "Kirby",
      dob: "05.12.1965",
      address: "b'Wimbledon, United Kingdom'",
    },
    {
      lead: "447906347473",
      name: "Alexander",
      surname: "Kirby",
      dob: "05.12.1965",
      address: "b'Wimbledon, United Kingdom'",
    },
    {
      lead: "447906347473",
      name: "Alexander",
      surname: "Kirby",
      dob: "05.12.1965",
      address: "b'Wimbledon, United Kingdom'",
    },
    {
      lead: "447906347473",
      name: "Alexander",
      surname: "Kirby",
      dob: "05.12.1965",
      address: "b'Wimbledon, United Kingdom'",
    },
    {
      lead: "447906347473",
      name: "Alexander",
      surname: "Kirby",
      dob: "05.12.1965",
      address: "b'Wimbledon, United Kingdom'",
    },
    {
      lead: "447906347473",
      name: "Alexander",
      surname: "Kirby",
      dob: "05.12.1965",
      address: "b'Wimbledon, United Kingdom'",
    },{
      lead: "447906347367",
      name: "Leah",
      surname: "Aarons",
      dob: "12.02.2004",
      address: "b'London, United Kingdom'",
    },
    {
      lead: "447906347412",
      name: "Debbie",
      surname: "Barr",
      dob: "13.11.2001",
      address: "b'Powick'",
    },
    {
      lead: "447906347473",
      name: "Alexander",
      surname: "Kirby",
      dob: "05.12.1965",
      address: "b'Wimbledon, United Kingdom'",
    },
    {
      lead: "447906347473",
      name: "Alexander",
      surname: "Kirby",
      dob: "05.12.1965",
      address: "b'Wimbledon, United Kingdom'",
    },
    {
      lead: "447906347473",
      name: "Alexander",
      surname: "Kirby",
      dob: "05.12.1965",
      address: "b'Wimbledon, United Kingdom'",
    },
    {
      lead: "447906347473",
      name: "Alexander",
      surname: "Kirby",
      dob: "05.12.1965",
      address: "b'Wimbledon, United Kingdom'",
    },
    {
      lead: "447906347473",
      name: "Alexander",
      surname: "Kirby",
      dob: "05.12.1965",
      address: "b'Wimbledon, United Kingdom'",
    },
    {
      lead: "447906347473",
      name: "Alexander",
      surname: "Kirby",
      dob: "05.12.1965",
      address: "b'Wimbledon, United Kingdom'",
    },
    {
      lead: "447906347473",
      name: "Alexander",
      surname: "Kirby",
      dob: "05.12.1965",
      address: "b'Wimbledon, United Kingdom'",
    },
    {
      lead: "447906347473",
      name: "Alexander",
      surname: "Kirby",
      dob: "05.12.1965",
      address: "b'Wimbledon, United Kingdom'",
    },
    {
      lead: "447906347473",
      name: "Alexander",
      surname: "Kirby",
      dob: "05.12.1965",
      address: "b'Wimbledon, United Kingdom'",
    },
    {
      lead: "447906347473",
      name: "Alexander",
      surname: "Kirby",
      dob: "05.12.1965",
      address: "b'Wimbledon, United Kingdom'",
    },{
      lead: "447906347367",
      name: "Leah",
      surname: "Aarons",
      dob: "12.02.2004",
      address: "b'London, United Kingdom'",
    },
    {
      lead: "447906347412",
      name: "Debbie",
      surname: "Barr",
      dob: "13.11.2001",
      address: "b'Powick'",
    },
    {
      lead: "447906347473",
      name: "Alexander",
      surname: "Kirby",
      dob: "05.12.1965",
      address: "b'Wimbledon, United Kingdom'",
    },
    {
      lead: "447906347473",
      name: "Alexander",
      surname: "Kirby",
      dob: "05.12.1965",
      address: "b'Wimbledon, United Kingdom'",
    },
    {
      lead: "447906347473",
      name: "Alexander",
      surname: "Kirby",
      dob: "05.12.1965",
      address: "b'Wimbledon, United Kingdom'",
    },
    {
      lead: "447906347473",
      name: "Alexander",
      surname: "Kirby",
      dob: "05.12.1965",
      address: "b'Wimbledon, United Kingdom'",
    },
    {
      lead: "447906347473",
      name: "Alexander",
      surname: "Kirby",
      dob: "05.12.1965",
      address: "b'Wimbledon, United Kingdom'",
    },
    {
      lead: "447906347473",
      name: "Alexander",
      surname: "Kirby",
      dob: "05.12.1965",
      address: "b'Wimbledon, United Kingdom'",
    },
    {
      lead: "447906347473",
      name: "Alexander",
      surname: "Kirby",
      dob: "05.12.1965",
      address: "b'Wimbledon, United Kingdom'",
    },
    {
      lead: "447906347473",
      name: "Alexander",
      surname: "Kirby",
      dob: "05.12.1965",
      address: "b'Wimbledon, United Kingdom'",
    },
    {
      lead: "447906347473",
      name: "Alexander",
      surname: "Kirby",
      dob: "05.12.1965",
      address: "b'Wimbledon, United Kingdom'",
    },
    {
      lead: "447906347473",
      name: "Alexander",
      surname: "Kirby",
      dob: "05.12.1965",
      address: "b'Wimbledon, United Kingdom'",
    },
  ];

  let headerGroup = (
    <ColumnGroup>
      <Row>
        <Column header="Lead" sortable field="lead" />
        <Column header="Name" sortable field="name" />
        <Column header="Surname" sortable field="surname" />
        <Column header="DOB" field="dob" />
        <Column header="Address" sortable field="address" />
      </Row>
    </ColumnGroup>
  );

  const [start, setStart] = useState(0);

  return (
    <div>
        <DataTable value={columns} paginator rowsPerPageOptions={[5, 10, 20, 30, 40, 50, 60]} rows={5} first={start} headerColumnGroup={headerGroup}>
          <Column field="lead" body={columns.lead} />
          <Column field="name" body={columns.name} />
          <Column field="surname" body={columns.surname} />
          <Column field="dob" body={columns.dob} />
          <Column field="address" body={columns.address} />
        </DataTable>
    </div>
  );
};

export default Table;
