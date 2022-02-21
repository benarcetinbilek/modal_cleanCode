import "./Modal.css";
import React, { useState } from 'react'
import axios from "axios";

const Modal = ({setShow}) => {
    const [reportName, setReportName] = useState("")
    const [emailTo, setEmailTo] = useState("")
    const [format, setFormat] = useState("")
    const [schedule, setSchedule] = useState("no-repeat")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [dropdown, setDropdown] = useState("")
    
    
    const submit = (e) => {
        axios.post("https://127.0.0.1:8000/a", {
            reportName: reportName,
            format: format,
            emailTo: emailTo,
            schedule: schedule,
            date: date,
            time: time,
            dropdown: dropdown
        }).then(response=> {
            window.alert("Succesfull")
        }).catch(error=>{
            window.alert("Try again")
        })
        setShow(false)
    }

  return ( 
    <div className="modal" >
        <div className="modal-content" >
            <div className="modal-header">
                <h5 >Export Report</h5>
            </div>
            <div className="modal-body">
                <div className="container">
                    <div className="labels">
                        <label>Report name</label>
                        <label>Format</label> 
                        <label>E-mail To</label>
                        <label>Schedule</label>  
                        {
                            schedule === "specific-date" ? <label>Date</label> :
                            schedule === "daily" ? <label>Everyday at</label> :
                            schedule === "weekly" ? <label>Every</label> : <></>
                        }
                    </div>
                    <div className="inputs">
                        <input className="textArea" type="text" placeholder="Shareablee Report" onChange={e=>{setReportName(e.target.value)}}/>
                    <div className="format-radio">
                        <input type="radio" checked={format === "Excel"} onChange={()=>{setFormat("Excel")}}/>Excel                
                        <input type="radio" checked={format === "CSV"} onChange={()=>{setFormat("CSV")}} />CSV
                    </div>
                    <input className="textArea" type="text" placeholder="Client@company.com" onChange={e=>{setEmailTo(e.target.value)}} />
                    <div className="schedule-radio">                                  
                        <input type="radio" checked={schedule === "no-repeat"} onChange={()=>{setSchedule("no-repeat")}}  /> No Repeat
                        <input type="radio" checked={schedule === "specific-date"}  onChange={()=>{setSchedule("specific-date")}}  />Specific
                        <input type="radio" checked={schedule === "daily"} onChange={()=>{setSchedule("daily")}} />Daily
                        <input type="radio" checked={schedule === "weekly"} onChange={()=>{setSchedule("weekly")}}/>Weekly                
                    </div>
                    <div>
                        {
                            schedule === "no-repeat" ? <div className="no-repeat"></div> :
                            schedule === "specific-date" ?
                            <div className="specific-date">
                                <input  type="date" placeholder="2019/05/22"onChange={e=>{setDate(e.target.value)}} />
                                <label>at</label>
                                <input  type="time"  placeholder="13:00" onChange={e=>{setTime(e.target.value)}} />
                            </div> :
                            schedule === "daily" ? 
                            <div className="daily">
                                <input type="time"  placeholder="13:00"   onChange={e=>{setTime(e.target.value)}}/>
                            </div> :
                            schedule === "weekly" ? 
                            <div className="weekly">
                                <select  onChange={e=>{setDropdown(e.target.value)}} >
                                    <option value="monday">Monday</option>
                                    <option value="saturday">Saturday</option>
                                    <option value="wednesday">Wednesday</option>
                                    <option value="thursday">Thursday</option>
                                    <option value="friday">Friday</option>
                                    <option value="saturday">Saturday</option>
                                    <option value="sunday">Sunday</option>
                                </select>
                                <label >at</label>
                                <input type="time" placeholder="13:00" onChange={e=>{setTime(e.target.value)}}/>
                            </div> : <></>
                        }
                    </div>
                </div>
            </div>            
        </div>
        <div className="modal-footer">
                <button className="button-cancel" onClick={()=>{setShow(false)}}>Cancel</button>
                <button className="button-ok" onClick={()=>{submit()}}><span>OK</span></button>
            </div>
    </div>
</div>
);
};

export default Modal;
