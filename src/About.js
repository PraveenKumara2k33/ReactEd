import Accordion from 'react-bootstrap/Accordion';

export const About = () => {
  return (
    <Accordion defaultActiveKey="0" flush id='About'>
        <Accordion.Item eventKey='0'>
            <Accordion.Header>Course Details</Accordion.Header>
            <Accordion.Body>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum odit ullam dolore odio mollitia voluptatem commodi ab tenetur laudantium placeat quisquam at doloremque quis reiciendis, quod dignissimos beatae ratione consectetur.
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='1'>
            <Accordion.Header>Job Desciption</Accordion.Header>
            <Accordion.Body>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam provident iure, nesciunt quisquam totam modi, non numquam iste laborum culpa, nemo architecto voluptas earum excepturi ullam odio quia nulla exercitationem!
            </Accordion.Body>
        </Accordion.Item>
    </Accordion>
  )
}
