console.log("Adam");
//import "./main.css";
app.use("/static", express.static('./app/'));
import { run } from "./app/app.js";
import {AlertService} from "./app/alert.service";
import {ComponentService} from "./app/component.service";
const alertService = new AlertService();
const componentService = new ComponentService();
run(alertService, componentService);