# Farm Management App - README

## Overview

Welcome to the Farm Management App! This application is designed to help farm owners, managers, and other stakeholders efficiently manage farm operations. The app provides features for registering members, managing farms, tracking seasons, crops, expenses, equipment, and much more. Below you'll find detailed information about each module and its functionality.

## Modules

### Membership
**Farm Owners**
- **Registration Details**: Capture and manage details of farm owners.

### Farm Managers
- **Name**
- **Email**
- **Telephone**
- **WhatsApp Line**

### Farm Management
- **Add new farm**:
  ```json
  {
    "farmId": "auto-generated",
    "farmSize": "Acres",
    "county": "County Name",
    "subcounty": "Subcounty Name",
    "ward": "Ward Name",
    "village": "Village Name",
    "latitude": "Latitude Coordinate",
    "longitude": "Longitude Coordinate"
  }
  ```

### Seasons Management
- **Add seasons**:
  ```json
  {
    "Id": "auto-generated",
    "Name": "Season Name",
    "startMonth": "Start Month",
    "endMonth": "End Month"
  }
  ```

### Crops Management
- **Add Crops**:
  ```json
  {
    "id": "auto-generated",
    "name": "Crop Name"
  }
  ```

### Farm Expenses List
- **Add new expense**

### Farm Equipment
- **Id**: auto-generated
- **Name**
- **Quantity**
- **EstimatedUnitValue**
- **TotalValue**

### Fixed Costs
- **Id**: auto-generated
- **Name** (e.g., power, water)
- **Frequency** (e.g., monthly)
- **Amount** (per unit frequency)

### Variable Expenditure Tracking
1. **Labour**
   - **farmId**
   - **startDate**
   - **endDate**
   - **noOfLabourers**
   - **Amount (KES)**
   
2. **Chemical Inputs**
   - **farmId**
   - **seasonId**
   - **cropId**
   - **inputId**
   - **inputUsageStartDate**
   - **inputUsageEndDate**
   - **inputQuantity**
   - **unitPrice**
   - **totalCost**

### Farm Inputs Classes
- **Fertilizer**
- **Herbicide**

### Farm Inputs
- **Input class** (e.g., fertilizer)
- **Input name** (e.g., NPK, CAN)

### Other Farm Inputs Trackings
- **farmId**
- **seasonId**
- **cropId**
- **inputId**
- **inputUsageStartDate**
- **inputUsageEndDate**
- **inputQuantity**
- **unitPrice**
- **totalCost**

### Farm Yield Tracking
- **farmId**
- **seasonId**
- **cropId**
- **yieldAmount**
- **yieldUnits** (e.g., Kgs, Sacks)
- **farmYieldValueEstimate**

### Sales Records
- **farmId**
- **seasonId**
- **cropId**
- **salesDate**
- **unitsSold**
- **unitPrice**
- **Amount**

### List of Pests and Diseases
- **Id**: auto-generated
- **Name**

### Pest and Diseases Tracking
- **farmId**
- **pestOrDiseaseId**
- **dateObserved**

### Pest and Diseases Tracking Alerts

### Weather Advisories

## References
- [Cropin: Farm Record Keeping Software Drives Agri Intelligence](https://www.cropin.com)
- Farmbrite
- Traction
- Agworld
- Conservis
- Bushel Farm (FarmLog)
- Agrivi
- MyCrops
- AgriXP
- MyFarm

## Getting Started

To get started with the Farm Management App, follow these steps:
1. Register as a farm owner or manager.
2. Add your farm details under the Farm Management module.
3. Set up seasons and crops relevant to your farm.
4. Track expenses, equipment, and other variable expenditures.
5. Monitor farm yields and sales records.
6. Use the Pest and Diseases modules to track and manage any issues.
7. Keep updated with weather advisories.

## Contributing

We welcome contributions to improve the app. Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License.

---

Thank you for using the Farm Management App! We hope it helps you streamline your farm operations and improve your productivity. For any questions or support, please contact us at [fkdevelopers254@gmail.com]. 
