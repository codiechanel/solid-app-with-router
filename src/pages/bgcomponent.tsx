/* eslint-disable */
// @ts-nocheck
import { createEffect, For } from "solid-js";
import { createStore, SetStoreFunction, Store, produce } from "solid-js/store";
import { render } from "solid-js/web";
import debug from 'debug'
function createLocalStore<T>(initState: T): [Store<T>, SetStoreFunction<T>] {
    const [state, setState] = createStore(initState);
    if (localStorage.todos) setState(JSON.parse(localStorage.todos));
    createEffect(() => (localStorage.todos = JSON.stringify(state)));
    return [state, setState];
}

let logger = debug('todopage')

let box = {
    key : "box89008",
    name: "the box",
    type : "div",

    entityType: "box",

}

let boxes = {}
boxes[box.key] = box
let createdAt = Date.now()
let frame = {
    id: "89798790",
    // name: chain.generate(constraints),
    name: "new frame",
    boxes,

    entityType: "frame",
    createdAt,
};

const [state, setState] = createStore({
    selectedProject: {
        name: "new project",
        entityType: "project",
        frames: { [frame.id]: frame },
        description: "a demo project",
        createdAt
        // rootKey: rootKey,
        // theme: globalStore.defaultTheme,
        // frames:
        // boxes,
    },
    newTitle: "new cool title"
});

const BGComponent = () => {
    /*const [state, setState] = createLocalStore({
        todos: [],
        newTitle: ""
    });*/


    logger('nice')
    logger('hmm','ji', state)
    return (
        <>
            <h3>Simple Todos Example</h3>
            <button onClick={() => {
                // setState((state) => ({ preferredName:  "Milner" }));
                let frame = {
                    id: "111"+ Date.now(),
                    // name: chain.generate(constraints),
                    name: "cool frame"+ Date.now(),
                    boxes,

                    entityType: "frame",
                    createdAt: Date.now(),
                };
                setState(
                    produce((s) => {
                        s.selectedProject.frames[frame.id] = frame;
                        // s.list.push("Pencil Crayon");
                    })
                );
                logger('hmm','ji', state)

            }} class="bg-blue-500">nw one </button>


            <For each={Object.entries(state.selectedProject.frames)}>
                {(frames, i) => {
                    const [ frameId, frame ] = frames;
                    return (
                        <div class="flex gap-4">
                            <div>{frame.name}</div>
                            <button class="bg-blue-500" onClick={() => {
                                setState(
                                    produce((s) => {
                                        s.selectedProject.frames[frameId].name = "coolness";
                                        // s.list.push("Pencil Crayon");
                                    })
                                );
                            }}>rename</button>

                        </div>
                    );
                }}
            </For>
        </>
    );
};

// render(App, document.getElementById("app"));
export  default  BGComponent