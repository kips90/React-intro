import Student from "./Student";


function HomePage({user, students})
{
    console.log("From Homepage ", students)

    return (
        <div className="container">
             <div className="row">
                <div className="col ">
                    <h6>{user.name}</h6>
                    <h6>{user.role}</h6>
                    <h6>{user.class}</h6>
                </div>
                <div className="col bg-light">

                <table class="table">
                <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Class</th>
                    <th scope="col">Role</th>
                </tr>
                </thead>
                <tbody>
                 
                    {
                        students.map((student)=> (
                            <Student singleStudent={student} />
                        )
                        )
                    }
                               
                </tbody>
                </table>

                    {/* {
                        students.map((student)=> (
                            <Student singleStudent={student} />
                        )
                        )
                    } */}



                </div>
                
             </div>
        </div>
    )
}

export default HomePage;