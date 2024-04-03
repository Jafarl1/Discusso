import { useState, useEffect, useCallback } from "react";
import { PulseLoader } from "react-spinners";
import { useAuth } from "../../../context/AuthContext";
import { getUserDataFromDatabase } from "../../../firebase/handleDatabaseFiles";
import { getDatabase, set, ref } from "../../../firebase/firebase";
import { getCurrentTime, handleKeyPress } from "../../../utils/utils";
import Plan from "./Plan";

import addIcon from "../../../assets/icons/add-note-icon.png";
import emptyIcon from "../../../assets/icons/empty-icon.png";
import styles from "./plans.module.css";

function Plans() {
  const { currentUser } = useAuth();
  const [loadingPlans, setLoadingPlans] = useState(true);
  const [plansArray, setPlansArray] = useState([]);
  const [filteredArray, setFilteredArray] = useState([]);
  const [newPlan, setNewPlan] = useState("");

  const getPlansFromDatabase = useCallback(async () => {
    if (currentUser) {
      try {
        const currentUserPlans = `${currentUser.id}/plans`;
        const dbPlans = await getUserDataFromDatabase(currentUserPlans);
        if (Array.isArray(dbPlans)) {
          setPlansArray(dbPlans.filter(Boolean));
          setLoadingPlans(false);
        }
      } catch (error) {
        console.error("Error fetching plans:", error);
      } finally {
        setTimeout(() => {
          setLoadingPlans(false);
        }, 2000);
      }
    }
  }, [currentUser]);

  const uploadPlansToDatabase = useCallback(
    async (plans) => {
      if (currentUser) {
        const db = getDatabase();
        try {
          await set(ref(db, `users/${currentUser.id}/plans`), plans);
        } catch (error) {
          console.error("Error uploading plans:", error);
        }
      }
    },
    [currentUser]
  );

  const addNewPlan = () => {
    if (newPlan.trim().length) {
      setPlansArray((prevPlansArray) => [
        ...prevPlansArray,
        {
          id: new Date().getTime(),
          content: newPlan,
          done: false,
          added: getCurrentTime(),
          lastModified: getCurrentTime(),
        },
      ]);
      setNewPlan("");
    }
  };

  const handleSearchInput = (event) => {
    const value = event.target.value.toLowerCase().trim();
    const filtered = plansArray.filter((plan) =>
      plan.content.toLowerCase().includes(value)
    );
    setFilteredArray(filtered);
  };

  const setPlanDone = (id) => {
    const changed = plansArray.map((plan) =>
      plan.id === id ? { ...plan, done: !plan.done } : plan
    );
    setPlansArray(changed);
  };

  const editPlan = (id, content) => {
    const edited = plansArray.map((plan) =>
      plan.id === id
        ? { ...plan, content, lastModified: getCurrentTime() }
        : plan
    );
    setPlansArray(edited);
  };

  const deletePlan = (id) => {
    setPlansArray((prevPlansArray) =>
      prevPlansArray.filter((plan) => plan.id !== id)
    );
  };

  useEffect(() => {
    getPlansFromDatabase();
  }, [getPlansFromDatabase]);

  useEffect(() => {
    setFilteredArray(plansArray);
    uploadPlansToDatabase(plansArray);
  }, [plansArray, uploadPlansToDatabase]);

  return (
    <div className={styles.plansComponent}>
      <div className={styles.topLineInputs}>
        <label className={styles.topLineLabel}>
          <input
            type="text"
            placeholder="Add new plan"
            className={styles.addPlanInput}
            value={newPlan}
            onChange={(e) => setNewPlan(e.target.value)}
            onKeyDown={(e) => handleKeyPress(e, "Enter", addNewPlan)}
          />
          <button className={styles.addPlanBtn} onClick={addNewPlan}>
            <img src={addIcon} className={styles.addPlanIcon} alt="Add plan" />
          </button>
        </label>
        <label
          className={styles.topLineLabel}
          style={{ justifyContent: "end" }}
        >
          <input
            type="search"
            name="search"
            placeholder="Search.."
            className={styles.addPlanInput}
            onChange={handleSearchInput}
          />
        </label>
      </div>

      <div className={styles.plansContent}>
        {loadingPlans ? (
          <div className={styles.loadingPlans}>
            <PulseLoader color="#8c0075" />
          </div>
        ) : filteredArray.length ? (
          filteredArray.map((plan, index) => (
            <Plan
              plan={plan}
              key={plan.id}
              index={index}
              setPlanDone={setPlanDone}
              editPlan={editPlan}
              deletePlan={deletePlan}
            />
          ))
        ) : (
          <div className={styles.emptyDiv}>
            <img src={emptyIcon} className={styles.emptyIconImg} alt="Empty" />
            No plans found.
          </div>
        )}
      </div>
    </div>
  );
}

export default Plans;
