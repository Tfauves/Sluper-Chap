import Form from "../Components/common/Form";
import InlineInputContainer from "./common/InlineInputContainer";
import Input from "../Components/common/Input";
import { Button } from "@mui/material";

const ChapGetsImgForm = (props) => {
  const { query, submitting, updateForm, onSubmit } = props;

  const handleChange = (e) => {
    updateForm(e.target.id, e.target.value);
  };

  const handleSubmit = (e) => {
    onSubmit(e);
  };

  return (
    <div>
      <Form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "100px",
          width: "50%",
        }}
      >
        <InlineInputContainer>
          <Input
            id="prompt"
            placeholder="ill find you pics of..."
            type="e"
            onChange={handleChange}
            value={query.prompt}
            required
          />
          <Input
            id="n"
            placeholder="how many"
            type="e"
            onChange={handleChange}
            value={query.n}
            required
          />
        </InlineInputContainer>
      </Form>
      <div>
        <Button
          sx={{ "&:hover": { color: "#303030" } }}
          style={{ marginBottom: ".5em" }}
          onClick={handleSubmit}
          variant="contained"
          size="large"
        >
          find
        </Button>
      </div>
    </div>
  );
};

export default ChapGetsImgForm;
