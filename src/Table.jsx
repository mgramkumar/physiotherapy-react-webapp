import React,{useState} from 'react';
import MaterialTable from 'material-table';

export default function Table() {

    const isValidEmail = (email) => {
      var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return !!email && typeof email === 'string'
        && email.match(emailRegex)
      }
    

    const filterOptions = {
        search: true,
        exportButton: true,
        sorting:true,
        filtering: true,
        pageSize: 10,
        pageSizeOptions:[10],
        headerStyle: { position: 'sticky', top: 0 },
        maxBodyHeight: 400,
        }
    const [data, setData] = useState([
        { name: 'Mehmet', gender: 'M', treatment: 'Bone break', date:'01/01/2020', nextVisit: '04/01/2020', phone:123 },
        { name: 'Zerya Betül', gender:'F', treatment: 'Leg Injury', date: '02/02/2020', nextVisit: '04/02/2020', phone:456 },
      ]);
    return (
        <div style={{ maxWidth: '100%' }}>
        <MaterialTable title="Daily Ledger"
            columns={[
            { title: 'Name', field: 'name' },
            {title: 'Gender', field: 'gender',lookup: { 'M': 'MALE', 'F': 'FEMALE' }},
            { title: 'Treatment', field: 'treatment' },
            { title: 'Diagnosis', field: 'diagnosis' },
            { title: 'Chief Complaint', field: 'cheifComplaint' },
            { title: 'Visit Date', field: 'date', type: 'date', dateSetting:{format:'dd/MM/Y'}},
            { title: 'Next Visit Date', field: 'nextVisit', type: 'date', dateSetting:{format:'dd/MM/Y'}},
            { title: 'VAS scale', field: 'vasscale' },
            { title: 'Mobile Number', field: 'phone', type: 'numeric', validate: rowData => rowData.phone?.toString().length !== 10 ? 
              { isValid: false, helperText: 'Phone number length must be 10' }: true},
            { title: 'Email', field: 'email', validate: rowData => isValidEmail(rowData.email?.toString()) ? 
            true :{ isValid: false, helperText: 'Enter a valid email address' }},
            ]}
        /* {
            title: 'Birth Place',
            field: 'birthCity',
            lookup: { 34: 'chennai', 63: 'tiruchy' },
        }, */
        
        data={data}        
        options={filterOptions}
        editable={{
            onRowAdd: newData =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log([...data, newData]);
                  setData([...data, newData]);
                  
                  resolve();
                }, 1000)
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  const dataUpdate = [...data];
                  const index = oldData.tableData.id;
                  dataUpdate[index] = newData;
                  setData([...dataUpdate]);
    
                  resolve();
                }, 1000)
              }),
            onRowDelete: oldData =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  const dataDelete = [...data];
                  const index = oldData.tableData.id;
                  dataDelete.splice(index, 1);
                  setData([...dataDelete]);
    
                  resolve();
                }, 1000)
              }),
          }}
    
        />
        </div>
    );
}