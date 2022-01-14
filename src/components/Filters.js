import React from "react";
import styled from "styled-components";

const Filters = () => {

    const updateFilters = (e) => {
        console.log(e);
    }

    const categories = ["All", "Office", "Living Room", "Kitchen", "Bedroom", "Dining", "Kids"];
    const companies = ["ikea", "good"];
    return (
        <Wrapper>
            <div className="content">
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form-control">
                        <input 
                            type="text"
                            name="text"
                            placeholder="search"
                            className="search-input"
                            onChange={updateFilters}
                        ></input>
                    </div>
                    <div className="form-control">
                        <h5>Category</h5>
                        <div>
                            {categories.map((c,i) => {
                                return (
                                    <button
                                        key={i}
                                        onClick={updateFilters}
                                        name="category"
                                        type="button"
                                    >
                                        {c}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                    <div className="form-control">
                        <h5>Company</h5>
                        <select
                            className="company"
                            name="company"
                            onChange={updateFilters}
                        >
                            {companies.map((c,i) => {
                                return (
                                    <option key={i} value={c}>{c}</option>
                                );
                            })}
                        </select>
                    </div>
                </form>
            </div>

        </Wrapper>
    );
}

const Wrapper = styled.section`
    .form-control {
        margin-bottom: 1.25rem;
        h5 {
        margin-bottom: 0.5rem;
        }
    }
    .search-input {
        padding: 0.5rem;
        background: var(--clr-grey-10);
        border-radius: var(--radius);
        border-color: transparent;
        letter-spacing: var(--spacing);
    }
    .search-input::placeholder {
        text-transform: capitalize;
    }
    button {
        display: block;
        margin: 0.25em 0;
        padding: 0.25rem 0;
        text-transform: capitalize;
        background: transparent;
        border: none;
        border-bottom: 1px solid transparent;
        letter-spacing: var(--spacing);
        color: var(--clr-grey-5);
        cursor: pointer;
      }
`;

export default Filters;