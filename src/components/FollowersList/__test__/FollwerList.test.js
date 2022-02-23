import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FollowersList from "../FollowersList";

const MockTodo = () => {
   return( <BrowserRouter>
        <FollowersList/>
    </BrowserRouter>)
}

describe("Todo integration test", () => {

    it("task initially", async () => {
        render(<MockTodo />);
        const followerDivElement = await screen.findByTestId('follower-item-0');
        expect(followerDivElement).toBeInTheDocument();
      });

});