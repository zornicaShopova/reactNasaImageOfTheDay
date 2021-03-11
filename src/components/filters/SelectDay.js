import { FormGroup, Label, Input } from 'reactstrap';
import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNasaImages, setSelectedDay } from '../../redux/actions';


const SelectDay = (props) => {
    const dispatch = useDispatch();
    const selectedDay = useSelector(state => state.selectedDay);
    
    const loadImageOfTheDay = useCallback(() => {
        dispatch(getNasaImages({
           date: selectedDay,
        
        }));
    },[dispatch,selectedDay]);

    useEffect(() => {
      loadImageOfTheDay();
    },[loadImageOfTheDay]);

    const changeSelectedDay = (event) => {
        dispatch(setSelectedDay(event.target.value))
    }

    return (
        <FormGroup>
            <Label for="select-day">Select day</Label>
            <Input
                onChange={changeSelectedDay}
                value={selectedDay}
                type="select"
                name="select"
                id="select-day">
                <option value="2021-03-01">Monday</option>
                <option value="2021-03-02">Tuesday</option>
                <option value="2021-03-03">Wednesday</option>
                <option value="2021-03-04">Thursday</option>
                <option value="2021-03-05">Friday</option>
                <option value="2021-03-06">Saturday</option>
                <option value="2021-03-07">Sunday</option>
               
            </Input>
        </FormGroup>
    );
}

export default SelectDay;