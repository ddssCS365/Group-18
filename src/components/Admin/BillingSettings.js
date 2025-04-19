// src/components/Admin/BillingSettings.js
import React, { useState, useEffect } from "react";
import { getBillingSettings, updateBillingSettings } from "./BillingService";
export default function BillingSettings() {
  const [settings, setSettings] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const loadSettings = async () => {
      const data = await getBillingSettings();
      setSettings(data);
    };
    loadSettings();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handlePaymentMethodChange = (method, isChecked) => {
    setSettings((prev) => {
      const methods = [...prev.paymentMethods];
      if (isChecked && !methods.includes(method)) {
        methods.push(method);
      } else if (!isChecked) {
        const index = methods.indexOf(method);
        if (index !== -1) methods.splice(index, 1);
      }
      return { ...prev, paymentMethods: methods };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateBillingSettings(settings);
      setSuccessMessage("Settings saved successfully!");
      setIsEditing(false);
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (error) {
      console.error("Failed to save settings:", error);
    }
  };

  return (
    <div className="billing-settings">
      <h2>Payment & Billing Configuration</h2>

      {successMessage && (
        <div className="alert alert-success">{successMessage}</div>
      )}

      {!isEditing ? (
        <div className="settings-view">
          <div className="setting-item">
            <label>Session Rate:</label>
            <span>${settings.sessionRate}</span>
          </div>
          <div className="setting-item">
            <label>Cancellation Fee:</label>
            <span>${settings.cancellationFee}</span>
          </div>
          <div className="setting-item">
            <label>Tax Rate:</label>
            <span>{settings.taxRate}%</span>
          </div>
          <div className="setting-item">
            <label>Late Fee:</label>
            <span>${settings.lateFee}</span>
          </div>
          <div className="setting-item">
            <label>Billing Cycle:</label>
            <span>{settings.billingCycle}</span>
          </div>
          <div className="setting-item">
            <label>Payment Methods:</label>
            <span>{settings.paymentMethods?.join(", ") || "None"}</span>
          </div>
          <button onClick={() => setIsEditing(true)} className="edit-btn">
            Edit Settings
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="settings-form">
          <div className="form-group">
            <label>Session Rate ($):</label>
            <input
              type="number"
              name="sessionRate"
              value={settings.sessionRate || ""}
              onChange={handleChange}
              min="0"
              step="0.01"
              required
            />
          </div>

          <div className="form-group">
            <label>Cancellation Fee ($):</label>
            <input
              type="number"
              name="cancellationFee"
              value={settings.cancellationFee || ""}
              onChange={handleChange}
              min="0"
              step="0.01"
              required
            />
          </div>

          <div className="form-group">
            <label>Tax Rate (%):</label>
            <input
              type="number"
              name="taxRate"
              value={settings.taxRate || ""}
              onChange={handleChange}
              min="0"
              max="100"
              step="0.1"
              required
            />
          </div>

          <div className="form-group">
            <label>Late Fee ($):</label>
            <input
              type="number"
              name="lateFee"
              value={settings.lateFee || ""}
              onChange={handleChange}
              min="0"
              step="0.01"
              required
            />
          </div>

          <div className="form-group">
            <label>Billing Cycle:</label>
            <select
              name="billingCycle"
              value={settings.billingCycle || ""}
              onChange={handleChange}
              required
            >
              <option value="weekly">Weekly</option>
              <option value="bi-weekly">Bi-Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="quarterly">Quarterly</option>
            </select>
          </div>

          <div className="form-group">
            <label>Payment Methods:</label>
            <div className="checkbox-group">
              <label>
                <input
                  type="checkbox"
                  checked={
                    settings.paymentMethods?.includes("ApplePay") || false
                  }
                  onChange={(e) =>
                    handlePaymentMethodChange("ApplePay", e.target.checked)
                  }
                />
                ApplePay
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={settings.paymentMethods?.includes("Mada") || false}
                  onChange={(e) =>
                    handlePaymentMethodChange("Mada", e.target.checked)
                  }
                />
                Mada
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={
                    settings.paymentMethods?.includes("Bank Transfer") || false
                  }
                  onChange={(e) =>
                    handlePaymentMethodChange("Bank Transfer", e.target.checked)
                  }
                />
                Bank Transfer
              </label>

              <label>
                <input
                  type="checkbox"
                  checked={settings.paymentMethods?.includes("Tabby") || false}
                  onChange={(e) =>
                    handlePaymentMethodChange("Tabby", e.target.checked)
                  }
                />
                Tabby
              </label>

              <label>
                <input
                  type="checkbox"
                  checked={settings.paymentMethods?.includes("Cash") || false}
                  onChange={(e) =>
                    handlePaymentMethodChange("Cash", e.target.checked)
                  }
                />
                Cash
              </label>
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="save-btn">
              Save Changes
            </button>
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="cancel-btn"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
