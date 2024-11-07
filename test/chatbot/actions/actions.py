# actions.py
# Contains custom actions for Rasa chatbot integration with the backend service.

from typing import Any, Text, Dict, List
from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher
import requests

class ActionSubmitComplaint(Action):
    def name(self) -> Text:
        return "action_submit_complaint"

    def run(self, dispatcher: CollectingDispatcher, tracker: Tracker, domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        complaint_details = tracker.get_slot("complaint_details")
        # Assuming the backend API is hosted at http://backend-service:8000/api/complaints/
        response = requests.post("http://backend-service:8000/api/complaints/", json={"description": complaint_details})

        if response.status_code == 201:
            dispatcher.utter_message(text="Your complaint has been successfully submitted.")
        else:
            dispatcher.utter_message(text="There was an error in submitting your complaint. Please try again.")

        return []

class ActionTrackComplaint(Action):
    def name(self) -> Text:
        return "action_track_complaint"

    def run(self, dispatcher: CollectingDispatcher, tracker: Tracker, domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        tracking_id = tracker.get_slot("tracking_id")
        # Assuming the backend API for tracking complaints is hosted at http://backend-service:8000/api/complaints/track/{tracking_id}
        response = requests.get(f"http://backend-service:8000/api/complaints/track/{tracking_id}")

        if response.status_code == 200:
            complaint_status = response.json().get("status")
            dispatcher.utter_message(text=f"Your complaint status is: {complaint_status}")
        else:
            dispatcher.utter_message(text="Unable to fetch the status of your complaint. Please check your tracking ID and try again.")

        return []

