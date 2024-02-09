import { Button, Col, Form, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactSelectCreatable from "react-select/creatable";

function NoteForm() {
  return (
    <Form>
      <Stack gap={4}>
        <Row>
          <Col>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control required autoComplete="off" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="tags">
              <Form.Label>Tags</Form.Label>
              <ReactSelectCreatable isMulti />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group>
          <Form.Label>Body</Form.Label>
          <Form.Control required as="textarea" rows={12} />
        </Form.Group>
      </Stack>
      <Stack
        direction="horizontal"
        gap={3}
        className="justify-content-end mt-3"
      >
        <Button type="submit" variant="primary">
          Save
        </Button>
        <Link to="..">
          <Button type="button" variant="outline-secondary">
            Cancel
          </Button>
        </Link>
      </Stack>
    </Form>
  );
}

export default NoteForm;
