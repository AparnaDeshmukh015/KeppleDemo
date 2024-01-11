import React, { useEffect } from 'react';
import { getUserList } from '../../redux/homeSlice';
import { useDispatch, useSelector } from 'react-redux';
 import { useNavigate } from 'react-router-dom';

const Home: React.FC<{}> = () => {
   const navigate:any= useNavigate();
   const dispatch: any = useDispatch();
  const cust: any = useSelector((state: any) => state?.customer);
  const {status}:any = useSelector((state: any) => state?.user);
  const { data } = cust


  useEffect(() => {
    
  if(status){
    dispatch(getUserList());
  } else {
    navigate('/');
  }
  },[status]);

  return (
    <>
      {data?.length > 0 ?
        <div>

          <table className="table-auto">
            <thead>
              <tr>

                <th>CLIENT_ID</th>
                <th>CLIENT_NAME</th>
                <th>CREATED_BY</th>
                <th>DEFAULT_SETTING</th>
                <th>GATEWAY_URL</th>
                <th>PAGE_NUMBER</th>
                <th>PAGE_SIZE</th>
                <th>PASSWORD</th>
                <th>RESPONSE_DESC</th>
                <th>RESPONSE_ID</th>
                <th>SEARCH_TEXT</th>
                <th>SMS_STATUS_CHECK_URL</th>
                <th>STATUS</th>
                <th>USER_ID</th>
                <th>USER_NAME</th>

              </tr>
            </thead>

            <tbody>
              {data?.map((item: any, i: number) => {
                return (
                  <tr key={i} >
                    <td>{item?.CLIENT_ID}</td>
                    <td>{item?.CLIENT_NAME}</td>
                    <td>{item?.CREATED_BY}</td>
                    <td>{item?.DEFAULT_SETTING}</td>
                    <td>{item?.CLIENT_NAME}</td>
                    <td>{item?.CLIENT_NAME}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        :
        <h1>No data found</h1>
      }
    </>
  )
}

export default Home;